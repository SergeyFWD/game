import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import img7 from '../img/7.png';
import img8 from '../img/8.png';
import img9 from '../img/9.png';
import img10 from '../img/10.png';
import img11 from '../img/11.png';
import img12 from '../img/12.png';
import img13 from '../img/13.png';
import img14 from '../img/14.png';
import img15 from '../img/15.png';
import img16 from '../img/16.png';
import img17 from '../img/17.png';
import img18 from '../img/18.png';
import img19 from '../img/19.png';
import img20 from '../img/20.png';
import img21 from '../img/21.png';
import img22 from '../img/22.png';
import img23 from '../img/23.png';
import img24 from '../img/24.png';
import img25 from '../img/25.png';
import img26 from '../img/26.png';
import img27 from '../img/27.png';
import img28 from '../img/28.png';
import img29 from '../img/29.png';
import img30 from '../img/30.png';
import img31 from '../img/31.png';
import img32 from '../img/32.png';
import img33 from '../img/33.png';
import img34 from '../img/34.png';
import img35 from '../img/35.png';
import img36 from '../img/36.png';

let arrCard = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
];

let cards: Array<[]> = [];
let firstCard: string = undefined;
let secondCard: string = undefined;
let cardsLenght: number = 0;

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

  timers();
  CONTAINER();
  const gameContainer = document.querySelector('.game__container');

  for (let i = 0; i < num; i++) {
    let randomIndex = Math.floor(Math.random() * arrCard.length);

    cards.push(arrCard[randomIndex], arrCard[randomIndex]);

    cards.sort(() => 0.5 - Math.random());
  }

  cards.forEach((item) => {
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

          cardsLenght += 2;

          if (cards.length === cardsLenght) {
            resaultGame('Выиграли', win);
            clearInterval(window.interval);            
          }

          firstCard = undefined;
          secondCard = undefined;
        } else if (secondCard !== firstCard) {
          resaultGame('Проиграли', lose);
          clearInterval(window.interval);
        }
      }
    });

    gameContainer.appendChild(btn);
  });
}
