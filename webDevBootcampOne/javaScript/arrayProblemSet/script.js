//*** Zack's Solutions ***

const array1 = ['a', 'b', 'c'];
const array2 = ['a', 'a', 'a'];
const array3 = [1, 5, 9];
const array4 = [-5, 100];

function printReverse(arr) {
	reversedArr = [];
	arr.forEach(function(element) {
		reversedArr.unshift(element);
	});
	return(reversedArr);
}

//Colt's printReverse:

// function printReverse(arr) {
// 	for (var i = arr.length - 1; i >= 0; i--) {
// 		console.log(arr[i]);
// 	}
// }

console.log("printReverse");
console.log("***************");
console.log(printReverse(array1));
console.log(printReverse(array2));
console.log("");



function isUniform(arr) {
	const firstPos = arr[0];
	//Colt recommends starting i to 1 
	//so that you compare postion 0 to position 1 first.
	for (var i = 1; i < arr.length; i++) {
		if (firstPos !== arr[i]) {
			return false;
		}
	}
	return true;
}

// function isUniform(arr) {
// 	const firstPos = arr[0];
// 	arr.forEach(function(element) {
// 		//Colt said the problem with this, is that the return
// 		//just applies to the function(element) part
// 		//after that it just jumps down to the bottom and always
// 		//returns true
// 		if (firstPos !== element) {
// 			return false;
// 		}
// 	});
// 	return true;
// }
console.log("isUniform");
console.log("***************");
console.log(isUniform(array1));
console.log(isUniform(array2));
console.log("");

function sumArray(arr) {
	let sum = 0;
	arr.forEach(function(element) {
		sum += element;
	});
	return sum;
}

console.log("sumArray");
console.log("***************");
console.log(sumArray(array3));
console.log(sumArray(array4));
console.log("");

function max(arr) {
	//Colt started his first number as arr[0]
	let largestNum = 0;
	arr.forEach(function(element) {
		if (element > largestNum) {
			largestNum = element;
		}
	});
	return largestNum;
}

//Colt's solution:

// function max(arr) {
// 	var max = arr[0];
// 	for (var i = 1; i < arr.length; i++) {
// 		if (arr[i] > max) {
// 			max = arr[i];
// 		}
// 	}
// }

console.log("max");
console.log("***************");
console.log(max(array3));
console.log(max(array4));
console.log("");