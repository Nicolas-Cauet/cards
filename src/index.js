import './scss/style.scss';

const images = require('./images.json');


const app =  {
    init(){
        app.createCards();
        app.cardPanel();
    },
    createCards(){
        images.forEach(image => {
            const container = document.querySelector('.container');
            const cardContainer = document.createElement('div');
            const cardTitle = document.createElement('h3');
            cardTitle.textContent = image.title;
            cardContainer.classList.add('panel');
            cardContainer.style.backgroundImage = `url(${image.image})`;
            container.append(cardContainer);
            container.querySelector('.panel').classList.add('active');
            cardContainer.append(cardTitle);
        })
    },
    cardPanel(){
        const cards = document.querySelectorAll('.panel');
        cards.forEach(card => {
            card.addEventListener('click',() => {
                app.removeActiveClass();
                card.classList.add('active');
            })
        })
    },
    removeActiveClass(){
        const cards = document.querySelectorAll('.panel');
        cards.forEach(card => {
            card.classList.remove('active');
        })
    }
};

app.init();