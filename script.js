
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
		// console.log(f += 3);	//18
		// console.log(f += 3);	//21
		// console.log(f += 3);	//24

	//Substraction Assignment Operator (-=)
		// console.log(f -= 2);	//22
		// console.log(f -= 2);	//20
		// console.log(f -= 5);	//15
		// console.log(f);

	//Multiplication Assignment Operator (*=)
		// console.log(f *= 2);	//30
		// console.log(f *= 3);	//90
		// console.log(f *= 4);	//360
		// console.log(f);
	
	//Division Assignment Operator (/=)
		// console.log(f /= 10);	//36
		// console.log(f /= 4);	//9
		// console.log(f /= 3);	//3
		// console.log(f);

	f = 200;
	//Modulo Assignment Operator (%=)
		// console.log(f %= 11);	//2
		// console.log(f %= 1);	//0


/* Comparison Operators 
	- compare two operands and returns a logical value (boolean value)

		- Equality (==)
		- Inequality (!=)
			--type coercion applies to == and !=

		- Strict Equality (===)
		- Strict Inequality (!==)
		
		//relation
		- Greater than ( > )
		- Less than ( < )

		- Greater than or equal to ( >= )
		- Less than or equal to ( <= )
*/

	/*Equality Operator ( == )
		- sometimes called loose equality operator
		- evaluates the values of the operands
		- checks the data types of operands
			- converts/type coercion if values have different data types

	
		// console.log(typeof("Jan" == "Jan") );
		console.log("Jan" == "Jan");
		console.log(true == true);
		console.log(true == false);
		console.log(false == true);
		console.log(false == false);
		console.log(null == undefined);
		console.log(true == 2);
		console.log(4 == "4");
		console.log(true == "2");
	*/	
		/* Type coercion 
			
			parseInt()
				-use to convert a data into an interger/number

			parseFloat()
				use to convert a data into a number while keeping its decimal places.

			toFixed()
				- sets the number of decimal places
				- returns a string value

			console.log( parseInt("100") );

			console.log( parseFloat("94.63") );

			console.log(3.14159265);

			console.log( 3.14159265.toFixed(3) )

			//to set to number value
			console.log( parseFloat(3.14159265.toFixed(3)) )

		*/

	/* Inequality Operator ( != ) 
		- evaluates whether operands are not equal 
	
		console.log("James" != "Daniel");

		console.log(3.01 !== 3);

		console.log(false != true);
		console.log(true != false);

		console.log(true != "true");
			//console.log(parseInt("true"))
			// 1 == NaN


		console.log("true" !== 1);
			//console.log(parseInt("true"))
			// NaN == 1

		console.log(null != undefined);
		console.log(false != 1);
			// false == 0
	*/


	/* Strict Equality (===) 
		- compares "sameness of values" & data type
		- type coercion doesn't apply to this operator
	
		console.log(1 === 1);
		console.log(2 === "2");
		console.log(true === 1);
		console.log(null === undefined);
	*/


	/* Strict Inequality (!==) 
		- compares "sameness of values" & data type whether it is strictly not equal
		- type coercion doesn't apply to this operator
	
		console.log(4 !== 4);
		console.log("4" !== "four");
		console.log(undefined !== null);
	*/

	/*
		Greater than ( > )	

		console.log( 45 > 50 );
		console.log( 50 > 49 );
	*/

	/*
		Greater than or equal to ( >= )

		console.log(5.00 >= 5);
		console.log(70 >= 71);
	*/

	/*
		- Less than ( < )

		console.log( 45 < 50 );
		console.log( 50 < 49 );
	*/
	/*
		- Less than or equal to ( <= )

		console.log(5.00 <= 5);
		console.log(70 <= 71);
	*/



/* Logical Operators
		- evaluates operands
		- returns boolean value

	//AND operator (&&)
		// checks whether all operands are in true value
	console.log(true && true);
	console.log(true && false);
	console.log(false && true);
	console.log(false && false);

	let g = true;
	let h = false;
	let i = 12;

		//first condition
			console.log( i < 2 );

		//second condition
			console.log( g == h )

		//third condition
			console.log( h && g )
	


	//OR operator (||)
		// evaluates to true if either of the operands is true

	console.log( true || true );
	console.log( true || false );
	console.log( false || true );
	console.log( false || false );


	let j = 3;
	let k = 4;

	//console.log( j > 7 || 8 < k );
		// 3 > 7 = false
		// 8 < 4 = false
		// false || false


	

	//NOT Operator (!)
		- negates the value
	
	console.log(!true);
	console.log(!false);


	let isStudent = true;
	let isInstructor = "1";

	let isAnswer = !isStudent == isInstructor;
	console.log(isAnswer);
	//!true = false
	// "1"
	// false == "1"
		// parseInt("1")
	// 0 == 1
	// final answer: False

*/

/* Mini Activity
	
	Without using the browser console, try to analyze the logic manually.

	Q: What is the value of isTralse?

*/

let isTrue = true;
let isFalse = false;

let isTralse = !( (!isFalse != !isFalse) && (isFalse !== isTrue) || (!isTrue != !isFalse) && (isFalse != !isTrue) )

console.log(isTralse)


// true != true 		//false
// false !== true 		//true
// false != true 		//true
// false != false 		//false

// false && true || true && false
// false || false
// !(false)
// True


