function print(input) {
	console.log(input);
}

// for (var i = 0; i < Things.length; i++) {
// 	Things[i];
// }

print("Print all numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
	print(i);
}

print("Print all even numbers between 10 and 40");
// the not elegant solution
for (var i = 10; i <= 40 ; i+=2) {
	print(i);
}
// the more elegant solution
for (var i = 0; i <= 40; i++) {
	if (i % 2 === 0) {
		print(i);
	}
}

print("Print all odd numbers between 300 and 333");
// inelegant
for (var i = 301; i <= 333 ; i+=2) {
	print(i);
}
// elegant
for (var i = 300; i <= 333 ; i++) {
	if (i % 2 !== 0) {
		print(i);	
	}
}

print("Print all numbers divisible by 5 AND 3 between 5 and 50");
for (var i = 5; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		print(i);
	}
}
