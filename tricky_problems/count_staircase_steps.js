/**
 * 
 * A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
 * or 3 steps at a time. 
 * Implement a method to count how many possible ways the child can run up the stairs.
*/


function countStepRec(n) {
    if (n < 0)     return 0;
    if (n === 0)     return 1;
    return countStepRec(n - 1) + countStepRec(n - 2) + countStepRec(n - 3)
}

function counStepsLinear(n){

    if(n<=0) return 0;
    if(n==1) return 1;
    if(n==2) return 2;
    if(n==3) return 4;
    const counts = [0,1,2,4];
    for(i=4; i<n; i++){
        counts.push(counts[i-1] + counts[i-2]+ counts[i-3]);
    }
    return counts[n];
}