function getArgs(content) {
    return content.split(/ +/).slice(1);
}

module.exports = getArgs;
