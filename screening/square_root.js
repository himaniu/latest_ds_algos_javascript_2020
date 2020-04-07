let derivative = (ce, x) => {
  return ce * ce - x;
}
  
let firstderivative = (ce) => {
  return 2 * ce;
}
  
function findSq(x) {

  let temp = 0;
  let ce = 1;
  while(x !== Math.floor(temp)) {
    ce = ce -  derivative(ce,x)/firstderivative(ce);
    temp = ce * ce;
  }
  
  console.log(ce);
}

findSq(16)

//soln 2 with BS

floorSqrt(int x)  
{     
    // Base cases 
    if (x == 0 || x == 1)  
       return x; 
  
    // Do Binary Search for floor(sqrt(x)) 
    int start = 1, end = x, ans;    
    while (start <= end)  
    {         
        int mid = (start + end) / 2; 
  
        // If x is a perfect square 
        if (mid*mid == x) 
            return mid; 
  
        // Since we need floor, we update answer when mid*mid is  
        // smaller than x, and move closer to sqrt(x) 
        if (mid*mid < x)  
        { 
            start = mid + 1; 
            ans = mid; 
        }  
        else // If mid*mid is greater than x 
            end = mid-1;         
    } 
    return ans; 
} 