/**
 * Board is the array where the symbol (representing the player) is stored.
 */
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
/**
 * positions: all the available spots on the board. First letter = row, second = column
 */
let positions = [
    "00", "01", "02",
    "10", "11", "12",
    "20", "21", "22"
];
let positionArray = "";
let winner = null;
let isAutoPlaying = false;

/**
 * Can be set by the player. How long the interval will be between each turn
 */
let autoPlayDelay = 250;
document.getElementById('speed').innerHTML = 'Set&nbsp;autoplay&nbsp;speed ('+autoPlayDelay+')';
function autoplaySpeed() {
    autoPlayDelay = parseInt(prompt('Give the delay in milliseconds'));
    if (!Number.isInteger(autoPlayDelay)) {
        autoPlayDelay = 250;
    } else {
        document.getElementById('speed').innerHTML = 'Set&nbsp;autoplay&nbsp;speed ('+autoPlayDelay+')';
    }
}

/**
 * Can be set by the player. The number of times the computer plays the game.
 */
let autoPlayIterations = 10;
document.getElementById('iteration').innerHTML = 'Set&nbsp;autoplay&nbsp;iterations ('+autoPlayIterations+')';
function autoplayIt() {
    autoPlayIterations = parseInt(prompt('Give the number of iterations'));
    if (!Number.isInteger(autoPlayIterations)) {
        autoPlayIterations = 10;
    } else {
        document.getElementById('iteration').innerHTML = 'Set&nbsp;autoplay&nbsp;iterations ('+autoPlayIterations+')';
    }
}

/**
 * Can be set by the player. Controls if the score is added to the players total.
 */
let autoPlayAddWin = false;
document.getElementById('score').innerHTML = 'Add&nbsp;autoplay&nbsp;to&nbsp;score ('+autoPlayAddWin+')';
function autoplayScore() {
    autoPlayAddWin = confirm('Add autoplay wins to score. Choose OK to set to true, Choose cancel to set to false');

    if (typeof autoPlayAddWin === 'boolean') {
        if(autoPlayAddWin) {
            autoPlayAddWin = true;
            document.getElementById('score').innerHTML = 'Add&nbsp;autoplay&nbsp;to&nbsp;score ('+autoPlayAddWin+')';
        } else {
            autoPlayAddWin = false;
            document.getElementById('score').innerHTML = 'Add&nbsp;autoplay&nbsp;to&nbsp;score ('+autoPlayAddWin+')';
        }
    } else {
        autoPlayAddWin = false;
        document.getElementById('score').innerHTML = 'Add&nbsp;autoplay&nbsp;to&nbsp;score ('+autoPlayAddWin+')';
    }
}
let autoPlayI = 0;

/** array of all possible players */
let players = ['X', 'O'];
let CurrentPlayer = setNewPlayer();
    document.getElementById('text').innerHTML = 'Starting player is: ' + CurrentPlayer;

/** using font awesome to draw the X and O */
let PlayerX = '<i class="fas fa-times"></i>';
let PlayerO = '<i class="far fa-circle"></i>';

/** The scores, wins and draws */
let PlayerXWins = 0;
let PlayerOWins = 0;
let PlayerDraws = 0;

/**
 * @return String X or O. randomly chosen from the players array
 */
function setNewPlayer() {
    return players[Math.floor(Math.random() * players.length)];
}

/**
 * Switch to the other player
 * @return boolean, if the execution was a success or not.
 */
function switchPlayer() {
    if (CurrentPlayer === "") {
        return false;
    } else if (CurrentPlayer === "X") {
        CurrentPlayer = "O";
        document.getElementById('text').innerHTML = "Current player is " + CurrentPlayer;
        return true;
    } else if (CurrentPlayer === "O") {
        CurrentPlayer = "X";
        document.getElementById('text').innerHTML = "Current player is " + CurrentPlayer;
        return true;
    } else {
        return false;
    }
}

/**
 * Place the X or O symbol in the html on the given position
 * @return boolean, if the execution was a success or not.
 */
function place(position) {
    if (CurrentPlayer === "X") {
        document.getElementById(position).innerHTML = PlayerX;
        return true;
    } else if (CurrentPlayer === "O") {
        document.getElementById(position).innerHTML = PlayerO;
        return true;
    } else {
        document.getElementById(position).innerHTML = "?";
        return false;
    }
}

/**
 * Check in array board if the given position is available or not
 * @return boolean, if the execution was a success or not.
 */
function checkIfAvailable(position) {
    positionArray = position.split("");
    let boardPos = board[positionArray[0]][positionArray[1]];

    if(boardPos === "") {
        return true;
    } else if (boardPos === "X" || boardPos === "O") {
        return false;
    } else {
        return false;
    }

}

/**
 * Occupies the position in array board with the current player
 * And removes the position in the array positions
 * @return boolean, if the execution was a success or not.
 */
function putInBoard(position) {
    let positionArray = position.split("");

    if (CurrentPlayer === "X" || CurrentPlayer === "O") {
        if (board[positionArray[0]][positionArray[1]] = CurrentPlayer) {
            positions.splice(positions.indexOf(position), 1);
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * Colors the winner green, or all gray on draw
 * @return boolean, if the execution was a succes or not.
 */
function drawWin(type, cell) {
    if (type === 'horizontal') {
        one = [cell]+[0];
        two = [cell]+[1];
        three = [cell]+[2];
        document.getElementById(one).style.color = 'rgb(34, 221, 34)';
        document.getElementById(two).style.color = 'rgb(34, 221, 34)';
        document.getElementById(three).style.color = 'rgb(34, 221, 34)';

        document.getElementById('text').innerHTML = CurrentPlayer + " won the game!";
        return true;
    } else if (type === 'vertical') {
        one = [0]+[cell];
        two = [1]+[cell];
        three = [2]+[cell];
        document.getElementById(one).style.color = 'rgb(34, 221, 34)';
        document.getElementById(two).style.color = 'rgb(34, 221, 34)';
        document.getElementById(three).style.color = 'rgb(34, 221, 34)';

        document.getElementById('text').innerHTML = CurrentPlayer + " won the game!";
        return true;
    } else if (type === 'diaL-R') {
        document.getElementById('00').style.color = 'rgb(34, 221, 34)';
        document.getElementById('11').style.color = 'rgb(34, 221, 34)';
        document.getElementById('22').style.color = 'rgb(34, 221, 34)';

        document.getElementById('text').innerHTML = CurrentPlayer + " won the game!";
        return true;
    } else if (type === 'diaR-L') {
        document.getElementById('02').style.color = 'rgb(34, 221, 34)';
        document.getElementById('11').style.color = 'rgb(34, 221, 34)';
        document.getElementById('20').style.color = 'rgb(34, 221, 34)';

        document.getElementById('text').innerHTML = CurrentPlayer + " won the game!";
        return true;
    } else if (type === 'draw') {
        ColorThese = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
        ColorThese.forEach(one);
        function one(value) {
            document.getElementById(value).style.color = 'rgb(128, 128, 128)';
        }

        document.getElementById('text').innerHTML = "Draw!";
        return true;
    }
    return false;
}

/**
 * Checks if the three given values are equal to each other
 * @return boolean, if the values are equal or not.
 */
function equal(a, b, c) {
    return a === b && a === c && a !== '';
}

/**
 * Checks if the current player made a winning move
 * if so, it will add a win and call function drawWin
 * @return boolean, if the execution was a success or not.
 */
function checkWinner() {
    let i;
//horizontal
    for(i = 0; i < board.length; i++) {
        if (equal(board[i][0], board[i][1], board[i][2])) {
            winner = CurrentPlayer;
            addWin();
            drawWin('horizontal', i);
            autoPlayI++;
            return true;
        }
    }
    //vertical
    for(i = 0; i < board.length; i++) {
        if (equal(board[0][i], board[1][i], board[2][i])) {
            winner = CurrentPlayer;
            addWin();
            drawWin('vertical', i);
            autoPlayI++;
            return true;
        }
    }
    //diagonal l-r
    if (equal(board[0][0], board[1][1], board[2][2])) {
        winner = CurrentPlayer;
        addWin();
        drawWin('diaL-R', 0);
        autoPlayI++;
        return true;
    }
    //diagonal r-l
    if (equal(board[0][2], board[1][1], board[2][0])) {
        winner = CurrentPlayer;
        addWin();
        drawWin('diaR-L', 0);
        autoPlayI++;
        return true;
    }
    //draw
    if (!Array.isArray(positions) || !positions.length) {
        winner = 'draw';
        PlayerDraws++;
        drawWin('draw', 0);
        autoPlayI++;
        return true;
    }

    return false;
}

/**
 * If the player wins this round it will add one to the score
 * @return boolean, if the execution was a success or not.
 */
function addWin() {
    if (CurrentPlayer === "X") {
        PlayerXWins++;
        return true;
    } else if (CurrentPlayer === "O") {
        PlayerOWins++;
        return true;
    } else {
        return false;
    }
}

/**
 * Resets all of the variables
 * @return boolean, if the execution was a success or not.
 */
function restartGame() {
    board = [['', '', ''],['', '', ''],['', '', '']];
    positions = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
    positionArray = "";

    if(winner === 'X') {
        CurrentPlayer = 'O';
    } else if(winner === 'O') {
        CurrentPlayer = 'X';
    }
    document.getElementById('text').innerHTML = 'Starting player is: ' + CurrentPlayer;

    winner = null;

    PlayerX = '<i class="fas fa-times"></i>';
    PlayerO = '<i class="far fa-circle"></i>';

    positions.forEach(one);
    function one(value) {
        document.getElementById(value).innerHTML = "&nbsp;";
        document.getElementById(value).style.color = 'rgb(0, 0, 0)';
    }
    return true;
}

/**
 * Resets all of the scores
 * @return boolean, if the execution was a success or not.
 */
function resetScores() {

    PlayerXWins = 0;
    PlayerOWins = 0;
    PlayerDraws = 0;

    document.getElementById('Xwins').innerHTML = PlayerXWins;
    document.getElementById('Owins').innerHTML = PlayerOWins;
    document.getElementById('draws').innerHTML = PlayerDraws;
    return true;
}

/**
 * Is called if the button Autoplay is pressed
 * @return void, to stop the function.
 */
function coreAutoPlay() {
    if (isAutoPlaying) {
        return;
    } else {
        isAutoPlaying = true;
        autoPlay();
    }
}

/**
 * The logic of the game, puts all of the functions together
 *      restarts the game when necessary
 * @return void, to break out of the loop.
 */
function autoPlay() {
    if (autoPlayI === autoPlayIterations) {
        autoPlayI = 0;
        isAutoPlaying = false;
        return;
    }
    if (winner != null) restartGame();
    if(positions === undefined || positions.length === 0) restartGame();

    let position = positions[Math.floor(Math.random() * positions.length)];

    if (checkIfAvailable(position)) {
        if (putInBoard(position)) {
            if (place(position)) {
                if (checkWinner()) {
                    if (autoPlayAddWin) {
                        document.getElementById('Xwins').innerHTML = PlayerXWins;
                        document.getElementById('Owins').innerHTML = PlayerOWins;
                        document.getElementById('draws').innerHTML = PlayerDraws;
                    } else {
                        //resetScores();
                    }
                    setTimeout(autoPlay, autoPlayDelay);
                } else {
                    if (switchPlayer()) {
                        setTimeout(autoPlay, autoPlayDelay);
                    }
                }
            }
        }
    }
}

/**
 * The logic of the game, puts all of the functions together
 *      restarts the game when necessary
 * @return boolean, if the execution was a success or not.
 */
function core(position) {
    if (winner != null) restartGame();
    if(positions === undefined || positions.length === 0) restartGame();

    if (checkIfAvailable(position)) {
        if (putInBoard(position)) {
            if (place(position)) {
                if (checkWinner()) {
                    document.getElementById('Xwins').innerHTML = PlayerXWins;
                    document.getElementById('Owins').innerHTML = PlayerOWins;
                    document.getElementById('draws').innerHTML = PlayerDraws;
                } else {
                    switchPlayer()
                }
            }
        }
    }
}
