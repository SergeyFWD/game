function renderLevelSelection() {
  // Создание общей обертки
  const chooseWrap = document.createElement('div');
  chooseWrap.classList.add('choose-wrap');

  // Создание Title
  const h2 = document.createElement('h2');
  h2.classList.add('choose__title');
  h2.textContent = 'Выбери сложность';

  // Создание Кнопки
  const btnChoose = document.createElement('button');
  btnChoose.classList.add('choose__btn');
  btnChoose.textContent = 'Старт';

  // Создание общей обертки для ссылок
  const chooseLinkBg = document.createElement('div');
  chooseLinkBg.classList.add('choose__link-bg');

  // Создание блоков с сылками
  const chooseLinkWrapEasy = document.createElement('div');
  chooseLinkWrapEasy.classList.add('choose__link-wrap');

  const chooseLinkEasy = document.createElement('a');
  chooseLinkEasy.classList.add('choose__link', 'easy');
  chooseLinkEasy.setAttribute('href', '#');
  chooseLinkEasy.setAttribute('value', 'easy');
  chooseLinkEasy.textContent = '1';

  const chooseLinkWrapAverage = document.createElement('div');
  chooseLinkWrapAverage.classList.add('choose__link-wrap');

  const chooseLinkAverage = document.createElement('a');
  chooseLinkAverage.classList.add('choose__link', 'average');
  chooseLinkAverage.setAttribute('href', '#');
  chooseLinkAverage.setAttribute('value', 'average');
  chooseLinkAverage.textContent = '2';

  const chooseLinkWrapHard = document.createElement('div');
  chooseLinkWrapHard.classList.add('choose__link-wrap');

  const chooseLinkHard = document.createElement('a');
  chooseLinkHard.classList.add('choose__link', 'hard');
  chooseLinkHard.setAttribute('href', '#');
  chooseLinkHard.setAttribute('value', 'hard');
  chooseLinkHard.textContent = '3';

  APP.appendChild(chooseWrap);
  chooseWrap.appendChild(h2);
  chooseWrap.appendChild(chooseLinkBg);

  // Добавление ссылки №1
  chooseLinkBg.appendChild(chooseLinkWrapEasy);
  chooseLinkWrapEasy.appendChild(chooseLinkEasy);

  // Добавление ссылки №2
  chooseLinkBg.appendChild(chooseLinkWrapAverage);
  chooseLinkWrapAverage.appendChild(chooseLinkAverage);

  // Добавление ссылки №3
  chooseLinkBg.appendChild(chooseLinkWrapHard);
  chooseLinkWrapHard.appendChild(chooseLinkHard);

  // Добавление кнопки
  chooseWrap.appendChild(btnChoose);
}

renderLevelSelection();

// Переход на другие страницы

const btn = document.querySelector('.choose__btn');
const link = document.querySelectorAll('.choose__link');

link.forEach((element) => {
  element.addEventListener('click', () => {
    btn.addEventListener('click', (event) => {
      const getValue = element.getAttribute('value');
      event.preventDefault();

      if (getValue === 'easy') {
        renderCard(3);
      } else if (getValue === 'average') {
        renderCard(15);
      } else if (getValue === 'hard') {
        renderCard(36);
      } else {
        alert('Выберите уровень сложности');
      }
    });
  });
});
