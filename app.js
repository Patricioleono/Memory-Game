// funcion que llama desde el inicio a javascript
document.addEventListener('DOMContentLoaded', () => {
	//Array de Cartas
	const arrayCard = [
		{
			name: 'css',
			img: 'img/css.png'
		},
		{
			name: 'css',
			img: 'img/css.png'
		},
		{
			name: 'html',
			img: 'img/html.png'
		},
		{
			name: 'html',
			img: 'img/html.png'
		},
		{
			name: 'javascript',
			img: 'img/javascript.png'
		},
		{
			name: 'javascript',
			img: 'img/javascript.png'
		},
		{
			name: 'nodejs',
			img: 'img/nodejs.png'
		},
		{
			name: 'nodejs',
			img: 'img/nodejs.png'
		},
		{
			name: 'php',
			img: 'img/php.png'
		},
		{
			name: 'php',
			img: 'img/php.png'
		},
		{
			name: 'react',
			img: 'img/react.png'
		},
		{
			name: 'react',
			img: 'img/react.png'
		}
	]

	//arrow function que ordena de manera aleatoria las cartas
	arrayCard.sort(() => 0.5 - Math.random())

	//variables
	const container = document.querySelector('.container')
	const result = document.querySelector('#result')
	var choseCard = []
	var choseCardId = []
	var won = []

	//funcion para mapear tablero
	function boardCreate() {
		for (let i = 0; i < arrayCard.length; i++) {
			var card = document.createElement('img')
			card.setAttribute('src', 'img/front.jpg')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			container.appendChild(card)
		}
	}

//Aciertos
function match(){
	var cards = document.querySelectorAll('img')
	const firstOption = choseCardId[0]
	const secondOption = choseCardId[1]
	if (choseCard[0] === choseCard[1]) {
		alert('Econtraste los Pares!')
		cards[firstOption].setAttribute('src', 'img/back.png')
		cards[secondOption].setAttribute('src', 'img/back.png')
		won.push(choseCard)
	}else{
		cards[firstOption].setAttribute('src', 'img/front.jpg')
		cards[secondOption].setAttribute('src', 'img/front.jpg')
		alert('Pares Distintos Intenta Denuevo!')
	}
	choseCard =[]
	choseCardId = []
	result.textContent = won.length
	if (won.length === arrayCard.length/2) {
		result.textContent = 'Felicitaciones las has Encontrado Todas'
	}
}

//vuelta de carta
function flipCard(){
	var  cardId = this.getAttribute('data-id')
	choseCard.push(arrayCard[cardId].name)
	choseCardId.push(cardId)
	this.setAttribute('src', arrayCard[cardId].img)
	if (choseCard.length === 2) {
		setTimeout(match, 500)
	}
}
//crear trablero
	boardCreate()

})