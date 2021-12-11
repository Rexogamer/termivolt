# Termivolt

A simple utility to interact with the Revolt API via the command line.

## Installation

You can install Termivolt via the following methods:

### npm

`npm i -g termivolt`

### Yarn

`yarn global add termivolt`

Yarn 2+ [doesn't support global installs](https://github.com/yarnpkg/berry/issues/821), but you can run Termivolt as a "one-time" command with `yarn dlx`:

`yarn dlx termivolt <command, eg -help>`

(Note that you'll have to append `yarn dlx` every time you want to use Termivolt with this method.)

### pnpm

`pnpm add termivolt --global`

## Usage

Required arguments are in \<angle brackets>, while optional arguments are in [square brackets].

### Sending messages (-send)

To send messages with Termivolt, run `termivolt -send`. Here's the full list of arguments:

`termivolt -send <(--user/--bot)> <token> <channel id (in quotes)> <message content (in quotes)>`

#### Arguments

- `--user/--bot` determines whether the token is a bot or session token. These require different methods of authentication.
- The token is provided as-is (i.e. as copied from Revolt). Bot tokens can be found in your bot settings page - to get session tokens, [follow this guide](https://infi.sh/post/revolt-tokens).
- The channel ID should be provided as a string (i.e. in quotes). You can find it in the URL when using Revite (the official Revolt client) or by right-clicking the channel's entry on the channel list and selecting "Copy channel ID".
- The message itself should be fully encased in double quotes - if you want to use double quotes in the message itself, escape them with a backslash. Note that message formatting may be messed up in some cases - I'm still investigating as to why, but it seems backticks and \newlines break.

### Kicking users (-send)

To kick members from servers with Termivolt, run `termivolt -send`. Note that you'll need the `Kick Members` permission - if you get a 403 error, this might be why. Here's the full list of arguments:

`termivolt -kick <(--user/--bot)> <token> <server id (in quotes)> <user id (in quotes)>`

#### Arguments

- `--user/--bot` determines whether the token is a bot or session token. These require different methods of authentication.
- The token is provided as-is (i.e. as copied from Revolt). Bot tokens can be found in your bot settings page - to get session tokens, [follow this guide](https://infi.sh/post/revolt-tokens).
- The server ID should be provided as a string (i.e. in quotes). You can find it in the URL when using Revite (the official Revolt client) or by right-clicking the server's entry on the server list and selecting "Copy server ID".
- The user ID should aslo be provided as a string.

### Help (-help)

If you need help, or want to see a list of commands, run `termivolt -help`. This will also show you what version of Termivolt you're using, which is useful for bug reports and such.

## Support

If you want to report a bug, suggest a feature or get help with using Termivolt, you can [open an issue](https://github.com/rexogamer/termivolt/issues/new) or join [Termivolt's support server](https://rvlt.gg/ra9dr2Rd) on Revolt.
