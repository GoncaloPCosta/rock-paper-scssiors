let rock;
let paper;
let scissors;

function getComputerChoice() {
	let num = Math.floor(Math.random()) * 100 + 1;

	if (num <= 29) {
		console.log("I choose rock! ");
		return rock;
	} else if (num <= 29 && num <= 65) {
		console.log("I chosse paper!");
		return paper;
	} else {
		console.log("I chosse scissors!");
		return scissors;
	}
}

function getHumanChoice() {
	let choice = prompt("Choose! rock, paper, scissors!");

	if (choice === "rock") {
		console.log("You choose rock!");
	} else if (choice === "paper") {
		console.log("You choose paper!");
	} else if (choice === "scissors") {
		console.log("You choose scissors!");
	} else {
		console.log("Not valid");
	}
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == rock && computerChoice == rock) {
		console.log("Its a tie");
	} else if (humanChoice == paper && computerChoice == paper) {
		console.log("Its a tie");
	} else if (humanChoice == scissors && computerChoice == scissors) {
		console.log("Its a tie");
	} else if (humanChoice == rock && computerChoice == scissors) {
		console.log("Rock beats scissors");
	} else if (humanChoice == scissors && computerChoice == paper) {
		console.log("scissors beat paper");
	} else if (humanChoice == paper && computerChoice == rock) {
		console.log("paper beats rock");
	} else if (humanChoice == scisssors && computerChoice == rock) {
		console.log("rcok beats scissors");
	} else if (humanChoice == paper && computerChoice == scissors) {
		console.log("scissors beats paper");
	} else if (humanChoice == rock && computerChoice == paper) {
		console.log("paper beats rock");
	}
}

function playGame() {
	for (i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		playRound(humanSelection, computerSelection);
	}
}

playGame();
