async function handle(message, { logger }) {
    const start = Date.now();
    const msg = await message.channel.send({
        content: "Pong!"
    });
    const latency = Date.now() - start;
    return msg.edit({
        content: `Pong! | Time taken: (**${latency}ms**)`
    })
}

module.exports = {
    handle,
    name: "ping",
    aliases: ["p"]
};
