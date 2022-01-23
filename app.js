class Casino {
    constructor(casinoName, playerName, timesPlayed) {
        this.casinoName = casinoName
        this.playerName = playerName
        this.timesPlayed = 0
    }
    
    playGame(betAmount) {

        if (Math.random() <= 0.5) {
            console.log(this.casinoName + ' wins')
        } else {
            console.log(`${this.playerName} bet ${betAmount}`)
            console.log(`${this.playerName} wins ${betAmount * (this.timesPlayed + 1)}`)
            this.timesPlayed++
        }
    }
}

// TESTS
const myCasino = new Casino("HackerU Casino", "Eric Hoover");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
