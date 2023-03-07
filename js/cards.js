const arrCard = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '17.png',
  '18.png',
  '19.png',
  '20.png',
  '21.png',
  '22.png',
  '23.png',
  '24.png',
  '25.png',
  '26.png',
  '27.png',
  '28.png',
  '29.png',
  '30.png',
  '31.png',
  '32.png',
  '33.png',
  '34.png',
  '35.png',
  '36.png',
];

const cards = [];

function renderCard(num) {
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
    btn.style.backgroundImage = `url("../img/${item}")`;

    gameContainer.appendChild(btn);
  });
}
