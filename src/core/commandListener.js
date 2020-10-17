const requireAll = require("require-all");
const path = require("path");
const { EventEmitter } = require("events");

const config = require("../../config.json");
const logger = require("../helpers/logger");


const eventEmitter = new EventEmitter();

requireAll({
    dirname:  path.join(__dirname, "../commands"),
    resolve: cmd => {
        async function listener(message) {
            // pass in logger for easier debugging
            const cmdLogger = logger.child({
                command: cmd.name,
                message
            });
            Promise.resolve(cmd.handle(message, { logger: cmdLogger }));
            return;
        };
        const aliases = cmd.aliases || [];
        aliases.concat([cmd.name])
            .forEach(alias => {
                eventEmitter.on(`cmd:${alias}`, listener)}
                )
        
        return cmd;
    }
});

module.exports = eventEmitter;
