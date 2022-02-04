let tipCalculator = document.querySelector('form.tipCalculator');
let tipAmount = document.querySelector('.tipAmount span');
let totalAmount = document.querySelector('.totalAmount span');

/**
 * Store default data
 */
const data = {
	bill: 0,
	tip: 0,
	person: 1,
};

/**
 * Handle input fields with validation
 */
tipCalculator.addEventListener('change', handleCalculator);

function handleCalculator(e) {
	// check input
	if (validateInput(e.target.value) && Number(e.target.value)) {
		e.target.classList.remove('err'); // Remove error class
		data[e.target.name] = parseFloat(e.target.value); // assign value to our targeted items

		const tip = (data.bill * data.tip) / 100; // calculate total tip
		let total = data.bill + tip; // calculate total bill
		total = total / data.person; // calcualte total person
		total = total.toFixed(2); // set fraction number
		totalAmount.textContent = total; // add total amount to display front-end

		let tipPerPerson = tip / data.person; //calculate per person tip
		tipPerPerson = tipPerPerson.toFixed(2); // set fraction number
		tipAmount.textContent = tipPerPerson; // add total amount to display front-end
	} else {
		e.target.classList.add('err'); // add error class to the input fields
	}
}

function validateInput(input) {
	let numbers = /^[0-9]+$/;
	return numbers.test(input);
}
