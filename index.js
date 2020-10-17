require("dotenv").config();
const { Client, Collection } = require("discord.js");

const client = new Client({ disableMentions: "everyone" });
client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
