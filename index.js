require("dotenv").config();
const { Client, Collection } = require("discord.js");

const { defaultPrefix } = require("./config.js");
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
    if (!message.content.startsWith(defaultPrefix)) return;

    const trigger = message.content.split(' ')[0];
    const removedPrefix = trigger.replace(defaultPrefix, 'cmd:');
    if (removedPrefix !== "cmd:") {
        eventEmitter.emit(removedPrefix, message);
    }
})
