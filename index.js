require("dotenv").config();
const { Client, Collection } = require("discord.js");

const logger = require("./src/helpers/logger");

const client = new Client({ disableMentions: "everyone" });
client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    logger.info(`Logged in as ${client.user.tag}!`);
});
