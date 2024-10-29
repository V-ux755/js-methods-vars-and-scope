/*
// Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team and, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/
// Function to calculate the average score from three scores
function getAverageScore(scoreA, scoreB, scoreC) {
    return (scoreA + scoreB + scoreC) / 3;
}

// Test Data
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

// BONUS Test Data
const dolphinsBonusScores1 = [97, 112, 101];
const koalasBonusScores1 = [109, 95, 123];
const dolphinsBonusScores2 = [97, 112, 101];
const koalasBonusScores2 = [109, 95, 106];

// Function to declare the competition result based on average scores and minimum requirements
function declareCompetitionResult(dolphinScores, koalaScores) {
    // Calculate average scores by passing each score directly
    const dolphinsAverageScore = getAverageScore(dolphinScores[0], dolphinScores[1], dolphinScores[2]);
    const koalasAverageScore = getAverageScore(koalaScores[0], koalaScores[1], koalaScores[2]);

    // Minimum score requirement for winning
    const minimumWinningScore = 100;

    // Determine and display the competition result
    if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumWinningScore) {
        console.log(`Dolphins win with an average score of ${dolphinsAverageScore}!`);
    } else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= minimumWinningScore) {
        console.log(`Koalas win with an average score of ${koalasAverageScore}!`);
    } else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= minimumWinningScore && koalasAverageScore >= minimumWinningScore) {
        console.log(`It's a draw with both teams scoring ${dolphinsAverageScore}!`);
    } else {
        console.log("No team wins the trophy due to the minimum score requirement.");
    }
}

// Run tests
console.log("Standard Test Data:");
declareCompetitionResult(dolphinsScores, koalasScores);
console.log("\nBonus Test Data 1:");
declareCompetitionResult(dolphinsBonusScores1, koalasBonusScores1);
console.log("\nBonus Test Data 2:");
declareCompetitionResult(dolphinsBonusScores2, koalasBonusScores2);