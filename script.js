
/*
	Operators
		- Assignment
		- Arithmetic
		- Compound Assignment

		- Comparison
		- Logical
*/

/*Assignment Operator ( = ) 
	- use to assign a value to a variable

	Example:

	let a = 14;
	console.log(a);

	a = 7;
	console.log(a);

	let b = a;
	console.log(a, b);

*/

/* Arithmetic Operator

	
	Example:

	//addition operator
		console.log(20 + 10);

	//subtraction operator
		console.log(20 - 10);

	//multiplication operator
		console.log(8 * 3);

	//division operator
		// console.log(25 / 5);
		console.log(100 / 3);

	//modulo operator
		console.log(100 % 3);
*/

	/* Increment (++) & Decrement (--) */
	let c = 30;

	//prefix
		// console.log(++c);	//31
		// console.log(c);		//31

		// console.log(--c);	//30
		// console.log(c);		//30

	//suffix
		// console.log(c++);	//30
		// console.log(c);		//31

		// console.log(c--);	//31
		// console.log(c);		//30

/*
	Mini Activity

	1. Perform Arithmetic Operation on two numbers.
	2. Perform Arithmetic Operation on two variables.
	3. Multiply a number to the difference of two numbers.
	4. Multiply a variable to the difference of two variables.

	Display your answer in the console.
	Screenshot and send to GC.



	//solution #1
		console.log(65 + 38);

	//solution #2
		let d = 50;
		let e = 10;

		console.log(d / e);

	//solution #3
		console.log(52 * (28 - 14));

	//solution #4
		console.log(c * (d - e));
*/

/* Compound Assignment 
	- perform arithmetic operation
	- assigning back the value to the variable
	
	Example:
*/
	let f = 15;

	//Addition Assignment Operator (+=)
	console.log(f += 3);	//18
	console.log(f += 3);	//21
	console.log(f += 3);	//24

	//Substraction Assignment Operator (-=)
	console.log(f -= 2);	//22
	console.log(f -= 2);	//20
	console.log(f -= 5);	//15
	console.log(f);

	//Multiplication Assignment Operator (*=)
	console.log(f *= 2);	//30
	console.log(f *= 3);	//90
	console.log(f *= 4);	//360
	console.log(f);
	
	//Division Assignment Operator (/=)
	console.log(f /= 10);	//36
	console.log(f /= 4);	//9
	console.log(f /= 3);	//3
	console.log(f);

	f = 200;
	//Modulo Assignment Operator (%=)
	console.log(f %= 11);	//2
	console.log(f %= 1);	//0