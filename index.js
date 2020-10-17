require("dotenv").config();
const { Client, Collection } = require("discord.js");

const { default_prefix } = require("./config.json");
const logger = require("./src/helpers/logger");
const eventEmitter = require("./src/core/commandListener");

const client = new Client({ disableMentions: "everyone" });
client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    logger.info(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    // ignore bots
    if (message.author.bot) return;
    if (!message.content.startsWith(default_prefix)) return;

    const trigger = message.content.split(' ')[0];
    const removedPrefix = trigger.replace(default_prefix, 'cmd:');
    eventEmitter.emit(removedPrefix, message);
})
