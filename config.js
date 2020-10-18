module.exports = {
    defaultPrefix: "b!",
    scoring: {
        default: [
            0, // 0 letters
            0, // 1 letters
            1, // 2 letters
            2, // 3 letters
            2, // 4 letters
            3, // 5 letters
            4, // 6 letters
            6, // 7 letters
            12 // 8+ letters
        ]
    },
    minVowels: 3
}
