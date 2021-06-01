document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'ino',
            img: 'img/ino.jpg'
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
            name: 'kakashi',
            img: 'img/kakashi.jpg'
        },
        {
            name: 'naruto',
            img: 'img/naruto.jpg'
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
            name: 'negi',
            img: 'img/negi.jpg'
        },
        {
            name: 'sakura',
            img: 'img/sakura.jpg'
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
            name: 'sasuke',
            img: 'img/sasuke.jpg'
        },
    ]

    const grid = document.querySelector('.grid')

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/logo.jpg')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard();
})