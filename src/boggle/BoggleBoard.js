const config = require("../../config");
const logger = require("../helpers/logger").child({
    module: "BoggleBoard"
});


class BoggleBoard {
    /**
     * Object that represents the boggle board.
     * @param {Array} board A double array of strings representing a boggle board with dimensions (width * height),
     * where the width the is the length of each inner array, and the height is the length of the outer array.
     */
    constructor(board) {
        if (!verifyBoard(board)) {
            throw Error("Invalid board supplied in BoggleBoard constructor.")
        };
        this.board = board;
    }

    static createNewTradtitionalBoard({
        lang = "en"
    } = {}) {
        const { size, dice } = config.boards[lang];
        const board = dice
            .map(arr => {
                const index = Math.floor(Math.random() * arr.length);
                return arr[index];
            });
        shuffle(board);
        const boardArray = getBoardArray(board, size);
        logger.info({
            msg: "Creating traditional boggle board",
            board: boardArray
        })
        return new BoggleBoard(boardArray);
    }
}

/**
 * Randomly shuffles the contents of the given array.
 * @param {Array} array array to be shuffled. 
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Creates a boggle board array.
 * @param {string[]} letterArray Array of letters.
 * @param {[number, number]} size An array consisting of the Boggle board's width and height.
 */
function getBoardArray(letterArray, size) {
    const [width, height] = size;
    if (letterArray.length !== width * height) {
        logger.error({
            msg: "Trying to init board with fewer letters than the dimensions of the board.",
            letterArray,
            size
        })
    }
    const boardArray = [];
    for (let i = 0; i < letterArray.length; i += width) {
        boardArray.push(letterArray.slice(i, i + width));
    }
    return boardArray;
}

function verifyBoard(boardArray) {
    const arr = boardArray.reduce((prevArr, arr) => {
        if (!prevArr) return false;
        if (arr.filter(x => x).length !== arr.length ||
        prevArr.filter(x => x).length !== prevArr.length) {
            logger.error({
                msg: "There are undefined letters in the board array.",
                boardArray
            });
            return false;
        }
        if (prevArr.length !== arr.length) {
            logger.error({
                msg: "The rows of the board are not of equal length.",
                boardArray
            });
            return false;
        }
        return arr;
    });
    return !!arr;
}

module.exports = BoggleBoard;
