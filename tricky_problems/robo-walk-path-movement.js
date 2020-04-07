/*
walking robot  
Problem statement
Given a robot which can only move in four directions, UP(U), DOWN(D), LEFT(L), RIGHT(R). Given a string consisting of instructions to move.
Output the co-ordinates of robot after the executing the instructions. Initial position of robot is at origin(0, 0).
 
Examples:
 
Input : move = "UDDLRL" 
Output : (-1, -1)
Move U : (0, 0)--(0, 1)
Move D : (0, 1)--(0, 0)
Move D : (0, 0)--(0, -1)
Move L : (0, -1)--(-1, -1)
Move R : (-1, -1)--(0, -1)
Move L : (0, -1)--(-1, -1)
 
Therefore final position after the complete
movement is: (-1, -1)
 
Input : move = "UDDLLRUUUDUURUDDUULLDRRRR"
Output : (2, 3) 

*/

//[0,0]
function finalPosition(move) {
    var l = move.length;
    var countUp = 0, countDown = 0, countLeft = 0, countRight = 0;
    // 'move' 
    for (var i = 0; i < l; i++) {
        currentMovement = move.charAt(i);
        // for each movement increment 
        // its respective counter 
        if (currentMovement == 'U')
            countUp++;

        else if (currentMovement == 'D')
            countDown++;

        else if (currentMovement == 'L')
            countLeft++;

        else if (currentMovement == 'R')
            countRight++;
    }

    // required final position of robot 
    console.log("Final Position: (" +
        (countRight - countLeft) + ", " +
        (countUp - countDown) + ")");
    return [(countRight - countLeft), (countUp - countDown)];
}

function finalPositionSolution2(initialPosition, path) {
    initialPosition = initialPosition || [0, 0];
    // 'move' 
    for (var i = 0; i < path.length; i++) {
        dir = move.charAt(i);
        if (dir === "U") {
            initialPosition[1] = initialPosition[1] + 1;
        }
        if (dir === "D") {
            initialPosition[1] = initialPosition[1] - 1;
        }
        if (dir === "L") {
            initialPosition[0] = initialPosition[0] - 1;
        }
        if (dir === "R") {
            initialPosition[0] = initialPosition[0] + 1;
        }
    }
    // required final position of robot 
    console.log("Final Position: " + initialPosition);
    return initialPosition;
}

const move = "ULDR";
finalPosition(move);
finalPositionSolution2([0,0],move);


