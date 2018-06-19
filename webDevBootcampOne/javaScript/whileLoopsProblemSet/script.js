function print(input) {
	console.log(input);
}

print("Print all numbers between -10 and 19");
var num = -10;
while (num != 20) {
	print(num);
	num++;
}

print("Print all even numbers between 10 and 40");
num = 10;
while (num <= 40) {
	print(num);
	num+=2;
}

print("Print all odd numbers between 300 and 333");
num = 301;
while (num <= 333) {
	print(num);
	num+=2
}

print("Print all numbers divisible by 5 AND 3 between 5 and 50");
num = 5;
while (num <= 50) {
	if (num % 5 === 0 && num % 3 === 0) {
		print(num);
	}
	num++;
}
