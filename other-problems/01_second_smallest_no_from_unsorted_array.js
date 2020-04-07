/*
Find second smallest number from an unsorted array
1. Assume first and second smallest number as infinity
2. Loop through each array elements
	1. Compare current element with first smallest
		if current is smaller than first 
			assign the value of first to second
			and make current as first smallest

		else current is less than second and current element is not equal to first then
		  make current as second smallest
3. Return variable second 
*/

const findSecondSmallestInUnsortedArray = (arr) => {
	let arr_size = arr.length;
	let i, firstSmallest, secondSmallest;
	//There should be atleast two elements
	if (arr_size < 2) {
		console.log(" Invalid Input ");
		return;
	}
	firstSmallest = secondSmallest = Number.MAX_SAFE_INTEGER;
	for (i = 0; i < arr_size; i++) {
		let currentItem = arr[i];
		// If current element is smaller than first then update both first and second
		if (currentItem < firstSmallest) {
			secondSmallest = firstSmallest;
			firstSmallest = currentItem;
		}
		else if (currentItem < secondSmallest && currentItem !== firstSmallest) {
			secondSmallest = currentItem;
		}
	}

	if (secondSmallest === Number.MAX_SAFE_INTEGER) {
		return "There is no second smallest number";
	}
	console.log(`Second smallest number in the array ${arr} is : ${secondSmallest}`);
	return secondSmallest;
}
