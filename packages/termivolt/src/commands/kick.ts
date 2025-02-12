import { styles, login } from "../lib/constants/index.js";

const kick = async function (
  userType: string,
  token: string,
  server: string,
  userid: string,
  apiURL: string = "https://api.revolt.chat/"
) {
  // if any args are missing, throw errors before doing anything
  if (!userType) {
    console.log(
      styles.error(
        "You need to specify whether the account is a user or a bot (--user/--bot), a token, the server ID, the ID of the user to kick and optionally a custom API URL (all in quotes)."
      )
    );
    return process.exit(1);
  }
  if (!token) {
    console.log(
      styles.error(
        "You need to specify a token, a server ID, the ID of the user to kick and optionally a custom API URL (all in quotes)."
      )
    );
    return process.exit(1);
  }
  if (!server) {
    console.log(
      styles.error(
        "You need to specify a server ID, the ID of the user to kick and optionally a custom API URL (all in quotes)."
      )
    );
    return process.exit(1);
  }
  if (!userid) {
    console.log(
      styles.error(
        "You need to specify the ID of the user to kick and optionally a custom API URL (both in quotes)."
      )
    );
    return process.exit(1);
  }

  // log in
  const client = await login(token, apiURL, userType);
  console.log(styles.info("[INFO] Logged in."));

  client.on("ready", async () => {
    try {
      const srv = client.servers?.get(server);
      if (srv === undefined) throw Error;
    } catch (error) {
      // catch any issues and warn if the server doesn't exist
      console.log(
        styles.error(
          `There was an issue getting the server - is the ID correct?\nThe error was: ${error}`
        )
      );
      return process.exit(1);
    }

    const server2 = client.servers?.get(server);
    console.log(styles.info("[INFO] The server has been found."));

    // send the message
    try {
      await (await server2!.fetchMember(userid)).kick();
      console.log(styles.success("The user has been kicked."));
    } catch (error) {
      console.log(
        styles.error(
          `There was an issue kicking the user.\n\nThe error was: ${error}`
        )
      );
    }

    // for SOME reason we need to end the process manually after kicking the user - is something lingering?
    return process.exit(0);
  });
};

export { kick };
