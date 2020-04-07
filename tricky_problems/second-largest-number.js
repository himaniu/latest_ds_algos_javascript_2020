    export  default class SecondNumber {
   
        static findSecondLargest(arr){
             var arr_size = arr.length;
            var i, first, second; 
            //There should be atleast two elements
            if (arr_size < 2) 
            { 
            console.log(" Invalid Input "); 
                return; 
            }       
            first = second = Number.MIN_VALUE; 
            for (i = 0; i < arr_size ; i++) 
            { 
                let currentNumber =  arr[i];
                // If current element is greater than first then update both first and second
                if (currentNumber > first) 
                { 
                    second = first; 
                    first = currentNumber; 
                }       
                // If arr[i] is in between first and second then update second
                else if (currentNumber > second && currentNumber != first) 
                    second = currentNumber; 
            }
            Console.log(`Second largest number in the array ${arr} is : ${second}`);
      return second;
    
        }

        static findSecondSmallest(arr){
            var arr_size = arr.length;
            var i, smallest, secondSmallest; 
            //There should be atleast two elements
            if (arr_size < 2) 
            { 
            console.log(" Invalid Input "); 
                return; 
            }       
            smallest = secondSmallest = Number.POSITIVE_INFINITY; 
            for (i = 0; i < arr_size ; i++) 
            { 
               let currentItem = arr[i];
                // If current element is smaller than first then update both first and second
                if (currentItem < smallest) 
                { 
                    secondSmallest = smallest; 
                    smallest = currentItem; 
                }
                else if (currentItem < secondSmallest) {
                 secondSmallest = currentItem; 
            }
            }
 
            console.log(`Second smallest number in the array ${arr} is : ${secondSmallest}`);
             return secondSmallest;
       }
    
    }
    