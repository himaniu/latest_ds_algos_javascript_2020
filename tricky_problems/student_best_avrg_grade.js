/*
"Given an array of Employees with name,marks. Find out the maximum average marks from the list.
    ['Bobby', 87],
    ['Charles', 100],
    ['Erics', 64],
    ['Charles', 22]
]
 Result: 87"
*/


const findBestAvgGrade = (scores) => {
    if (!Array.isArray(scores) && scores.length == 0)
        return 0;

    let scoresOfStudents = {};
    scores.forEach((studentScoreData) => {
        if (!Array.isArray(studentScoreData) && studentScoreData.length !== 2)
            return 0;

        const [studentName, score] = studentScoreData;
        const currentScoreList = scoresOfStudents[studentName];
        if (!currentScoreList) {
            scoresOfStudents[studentName] = [score];
        } else {
            currentScoreList.push(score);
        }
    });

    let max = 0;
    Object.keys(scoresOfStudents).forEach((studentName) => {
        let marksArray = scoresOfStudents[studentName];
        let sum = marksArray.reduce((ac, next) => ac + next, 0);
        let avg = sum / marksArray.length;
        max = Math.max(max, avg);
    });
    return Math.floor(max);
}


var inputArray = [
    ['Bobby', 87],
    ['Charles', 100],
    ['Erics', 64],
    ['Charles', 22]
]

console.log(findBestAvgGrade(inputArray));























