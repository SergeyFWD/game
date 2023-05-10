import { timers } from './timers';
import { resaultGame } from './resault';
import backCard from '../img/backCard.png';
import lose from '../img/lose.png';
import win from '../img/win.png';
const APP = document.querySelector('.app');

const CONTAINER = () => {
  // Создание общего контейнера для игры
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game__container');

  // Добавление общего контейнера для игры
  APP.appendChild(gameContainer);
};

export function renderCard(num: number) {
  APP.innerHTML = '';
  const arrCard = window.application.arrCard;
  const cards = window.application.cards;
  let firstCard = window.application.firstCard;
  let secondCard = window.application.secondCard;

  timers();
  CONTAINER();
  const gameContainer = document.querySelector('.game__container');

  for (let i = 0; i < num; i++) {
    let randomIndex = Math.floor(Math.random() * arrCard.length);

    cards.push(arrCard[randomIndex], arrCard[randomIndex]);

    cards.sort(() => 0.5 - Math.random());
  }

  cards.forEach((item: any) => {
    const btn = document.createElement('button');
    btn.classList.add('btn__card');
    btn.style.backgroundImage = `url("${item}")`;

    setTimeout(() => {
      btn.classList.add('game__card-back');
      btn.style.backgroundImage = `url("${backCard}")`;
    }, 2000);

    btn.addEventListener('click', (e) => {
      btn.style.backgroundImage = `url("${item}")`;
      btn.classList.remove('game__card-back');

      btn.setAttribute('value', `${item}`);
      const getValue = btn.getAttribute('value');
      if (firstCard === undefined) {
        firstCard = getValue;
        btn.classList.add('success');
      } else if (secondCard === undefined) {
        secondCard = getValue;
      }

      if (secondCard !== undefined && firstCard !== undefined) {
        if (secondCard === firstCard && firstCard === secondCard) {
          btn.classList.add('success');
          resaultGame('Выиграли', win);

          firstCard = undefined;
          secondCard = undefined;
        } else if (secondCard !== firstCard) {
          resaultGame('Проиграли', lose);
        }
      }
    });

    gameContainer.appendChild(btn);
  });
}
