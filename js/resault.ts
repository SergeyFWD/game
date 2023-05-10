const APP = document.querySelector('.app');
export function resaultGame(game: string, resault: string) {
  const wrap = document.createElement("div");
  wrap.classList.add("wrap");

  // Создание общей обертки
  const chooseWrap = document.createElement("div");
  chooseWrap.classList.add("choose-wrap", "resault");

  // Создание картинки 
  const chooseImg = document.createElement("div");
  chooseImg.classList.add("choose-img");
  chooseImg.style.backgroundImage = `url("${resault}")`

  // Создание Title
  const h2 = document.createElement("h2");
  h2.classList.add("choose__title", "choose__title-resault");
  h2.textContent = `Вы ${game}!`;

  // Создание описания таймера
  const chooseTimer = document.createElement("p");
  chooseTimer.classList.add("choose-time");
  chooseTimer.textContent = "Затраченное время:";

  // Получение значения Таймера

  const valueSeconds = document.querySelector('.timers__seconds').innerHTML;
  const valueMinutes = document.querySelector('.timers__minutes').innerHTML;

  // Создание таймера
  const timer = document.createElement("div");
  timer.classList.add("timer");
  timer.innerHTML = `${valueMinutes}.${valueSeconds}`;

  // Создание Кнопки
  const btnChoose = document.createElement("button");
  btnChoose.classList.add("choose__btn");
  btnChoose.textContent = "Играть снова";

  // Создание общей обертки для ссылок
  const chooseLinkBg = document.createElement("div");
  chooseLinkBg.classList.add("choose__link-bg");

  APP.before(wrap);
  wrap.appendChild(chooseWrap);
  chooseWrap.appendChild(chooseImg);
  chooseWrap.appendChild(h2);
  chooseWrap.appendChild(chooseTimer);
  chooseWrap.appendChild(timer);

  // Добавление кнопки
  chooseWrap.appendChild(btnChoose);

  btnChoose.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
  })
}