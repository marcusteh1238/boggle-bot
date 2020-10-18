# BoggleBot
Multiplayer Boggle bot, built with discord.js.

## About

Boggle is a word search game you can play with your friends.

Each player has **2 minutes** to search for words that can be constructed from the letters of neighbouring squares in a provided Boggle grid, be it horizontally, vertically, or diagonally neighboring.

When a player finds a word in the grid, they enter the word in chat. If no one else has entered the word yet, the player earns points based on the number of letters in the word. Otherwise, no points will be awarded to the player.

[Invite BoggleBot to your server!](https://discord.com/api/oauth2/authorize?client_id=767080347053064242&permissions=268823632&scope=bot)

### Commands:
- `b!ping` - Get latency between BoggleBot and your server.
- `b!boggle` - WIP

## Requirements

1. Node.js v12.0.0 or newer
2. Discord Bot Token ([Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot))

## Getting Started

1. Clone the repo and install dependencies.
```bash
git clone https://github.com/marcusteh1238/boggle-bot.git
cd boggle-bot
npm install
```
2. Create the `.env` configuration file in the root directory of the repository.
3. Fill in the config details based on the keys/vaules in `.env.example`.

**⚠ WARNING: Never commit or share your Bot Token or any other api keys on GitHub or anywhere else publicly!**
