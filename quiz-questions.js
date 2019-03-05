
'use strict'

const Quiz = new Object();


// What is the output of this code
Object.defineProperty(Quiz, 'question1', {
	value: function() {
		let y = 0;

		for (let x=2; x<=6; x++) {
			if (x>4) {
				y+=2;
			}
			y++
		}

		//y = 0 + 1
		//y = 1 + 1
		//y = 2 + 1
		//y = 3 + 2 + 1
		//y = 6 + 2 + 1

		document.write(y);
	},
	writable: false
});



// What is the output of this code?
Object.defineProperty(Quiz, 'question2', {
	value: function() {
		const x = {age:24};
		const y = x;
		const z = {age:24};

		alert(y!== (x !== z));
	},
	writable: false
});





// What is the output of this code?



// What is the output of this code?
Object.defineProperty(Quiz, 'question3', {
	value: function() {
		let p = [5, 4, 3, 2, 1, 6, 6, 9];

		function first(arr) {
			for (let i=0; i<arr.length; i++) {
				if(typeof arr[i] === 'number' && arr[i] % 2 === 0) {
					return arr[i];
				}
			}
			return null;
		}
	// return 4
	first(p);
	},
	writable: false
});




// What will be the output?

Object.defineProperty(Quiz, 'question4', {
	value: function() {
		const a = 0;
		const b = 0;
		const c = a++;
		const d = ++b;

		alert(a === b && d === c);
	},
	writable: false
});





// What will be the output?

Object.defineProperty(Quiz, 'question5', {
	value: function() {
		const X = 10;
		const x = 7;
		const c = 5;
		const z = (x*x) - (x);

		document.write(X - x);
		document.write(z);
	},
	writable: false
});


// What will be the output?

Object.defineProperty(Quiz, 'question6', {
	value: function() {
		let num = 3;
		num += '2';
		num = +num;

		document.write(num);
	},
	writable: false
});


// What will be the output?

Object.defineProperty(Quiz, 'question7', {
	value: function() {
		const a = (!undefined);
		const b = (!NaN);
		const c = (!null);

		console.log(a + b + c);
	},
	writable: false
});




