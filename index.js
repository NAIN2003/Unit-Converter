const btn = document.getElementById('btn');
const input = document.getElementById('input-value');
btn.addEventListener('click', function () {
	const lengthElement = document.getElementById('length-result');
	const volumeElement = document.getElementById('volume-result');
	const massElement = document.getElementById('mass-result');
	const inputValue = Number(input.value);
	if (inputValue) {
		const metersToFeet = (inputValue * 3.281).toFixed(3);
		const feetToMeters = (inputValue / 3.281).toFixed(3);
		const litersToGallons = (inputValue * 0.264).toFixed(3);
		const gallonsToLiters = (inputValue / 0.264).toFixed(3);
		const kilogramsToPounds = (inputValue * 2.204).toFixed(3);
		const poundsToKilograms = (inputValue / 2.204).toFixed(3);
		btn.innerText = 'Converted!';
		lengthElement.innerText = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;
		volumeElement.innerText = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;
		massElement.innerText = `${inputValue} kilograms = ${kilogramsToPounds} pounds | ${inputValue} pounds = ${poundsToKilograms} kilograms`;
	} else {
		btn.innerText = 'You have entered not a number. Try again & click me.';
	}
});