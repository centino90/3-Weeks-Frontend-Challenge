import "./main.scss"

const cards = document.querySelector('.cards')

if (window.innerWidth <= 768) cards.classList.add('row-cols-auto')

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {

        cards.classList.add('row-cols-auto')

    } else {

        cards.classList.remove('row-cols-auto')
    }

})