let currentPlayer = "X";
let numsOfTurn = 0;
let endGame = false;

function win(tileId1, tileId2, tileId3){
    let firstTile = $("#tile" + tileId1).text();
    console.log($("#tile" + tileId1).text())
    console.log(tileId1, tileId2, tileId3)
    let secondTile = $("#tile" + tileId2).text();
    let thirdTile = $("#tile" + tileId3).text();
    if (firstTile === currentPlayer && secondTile === currentPlayer && thirdTile === currentPlayer){
        console.log('win')
        endGame = true;
        if (currentPlayer === "X"){
            $('h1').html("Player X Wins");
            return endGame;
        } else {
            $('h1').html("Player O Wins");
            return endGame;
        }
    }
}

function checkVerticalWins(){
    win(1, 4, 7);
    win(2, 5, 8);
    win(3, 6, 9);
}

function checkHorizontalWins(){
    win(1, 2, 3);
    win(4, 5, 6);
    win(7, 8, 9);
}

function checkDiagonalWins(){
    win(1, 5, 9);
    win(3, 5, 7);
}

function checkGame() {
    numsOfTurn++;
    if (numsOfTurn === 9) {
        endGame = true;
        return "gameEnd";
    }
}

function performLogic(buttonId, tileId){ 
    let checking = checkGame();
    if(checking === 'gameEnd'){
        $('h1').html("It is a draw!!!!");
    } else if (endGame === true){
        numsofTurn = 0;
    }else {
        console.log("changing");
        $(buttonId).hide();
        $(tileId).html(currentPlayer);
        let vWin = checkVerticalWins();
        let hWin = checkHorizontalWins();
        let dWin = checkDiagonalWins();
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
    }
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

