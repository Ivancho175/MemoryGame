document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'ino',
            img: 'img/ino.jpg'
        },
        {
            name: 'kakashi',
            img: 'img/kakashi.jpg'
        },
        {
            name: 'naruto',
            img: 'img/naruto.jpg'
        },
        {
            name: 'negi',
            img: 'img/negi.jpg'
        },
        {
            name: 'sakura',
            img: 'img/sakura.jpg'
        },
        {
            name: 'sasuke',
            img: 'img/sasuke.jpg'
        },
        {
            name: 'ino',
            img: 'img/ino.jpg'
        },
        {
            name: 'kakashi',
            img: 'img/kakashi.jpg'
        },
        {
            name: 'naruto',
            img: 'img/naruto.jpg'
        },
        {
            name: 'negi',
            img: 'img/negi.jpg'
        },
        {
            name: 'sakura',
            img: 'img/sakura.jpg'
        },
        {
            name: 'sasuke',
            img: 'img/sasuke.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/konoha.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatches() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/konoha.jpg')
            cards[optionTwoId].setAttribute('src', 'img/konoha.jpg')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a Match!')
            cards[optionOneId].setAttribute('src', 'img/logo.jpg')
            cards[optionTwoId].setAttribute('src', 'img/logo.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/konoha.jpg')
            cards[optionTwoId].setAttribute('src', 'img/konoha.jpg')
            alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You won!!!'
        }
    }


    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatches, 500)
        }
    }

    createBoard();
    
})