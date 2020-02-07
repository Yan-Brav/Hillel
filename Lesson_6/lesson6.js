var gameArray = ["paper", "scissors", "stone"];
var compTurn = gameArray[Math.floor(Math.random() * gameArray.length)];
console.log(compTurn);
var userTurn = prompt("Enter your choice: stone, scissors or paper");

if (userTurn === null){
    alert("Game over");
} else {
    switch (userTurn.toLowerCase()) {
        case "paper": {
            if (compTurn === "paper") {
                alert("Draw");
            }
            if (compTurn === "scissors") {
                alert("You lose");
            }
            if (compTurn === "stone") {
                alert("You win");
            }
        }
            break;
        case "scissors": {
            if (compTurn === "paper") {
                alert("You win");
            }
            if (compTurn === "scissors") {
                alert("Draw");
            }
            if (compTurn === "stone") {
                alert("You lose");
            }
        }
            break;
        case "stone":
        {
            if (compTurn === "paper") {
                alert("You lose");
            }
            if (compTurn === "scissors") {
                alert("You win");
            }
            if (compTurn === "stone") {
                alert("Draw");
            }
        }
            break;
        default:
            alert("Be careful. Try again");
            break;
    }
}

