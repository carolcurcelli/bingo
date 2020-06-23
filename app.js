document.addEventListener('DOMContentLoaded', () => {

	const currentNumber = document.querySelector('#currentNumber');
	const generateNumber = document.querySelector('#generateNumber');
	const oldNumbers = document.querySelector('#oldNumbers');
	const newGame = document.querySelector('#retry')

	const numberList = Array.from(Array(91).keys());
	numberList.splice(0,1);
	numberList.sort(() => 0.5 - Math.random());

	const oldNumberList = new Array;

	generateNumber.addEventListener('click', newRound);
	function newRound() {
		oldNumberList.push(` ${numberList[0]}`);
		oldNumbers.innerHTML = oldNumberList;
		if (oldNumberList.length >= 90) {
			currentNumber.innerHTML= 'Fim!';
			generateNumber.disabled = true;
			newGame.classList.add('new-game');
		} else {
			currentNumber.innerHTML = numberList[0];
		}
		numberList.splice(0,1);
	}

})