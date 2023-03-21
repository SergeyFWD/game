function timers() {
  // Создание общего контейнера для таймера
  const timeWrap = document.createElement('div');
  timeWrap.classList.add('container');

  // Создание контейнера для таймера
  const timers = document.createElement('div');
  timers.classList.add('timers');

  // Создание контейнера Минуты
  const timerMinutes = document.createElement('div');
  timerMinutes.classList.add('timers__minutes');
  timerMinutes.textContent = '00';

  // Создание контейнера для Точки
  const timerDot = document.createElement('div');
  timerDot.classList.add('timers__dot');
  timerDot.textContent = '.';

  // Создание контейнера Секунды
  const timerSeconds = document.createElement('div');
  timerSeconds.classList.add('timers__seconds');
  timerSeconds.textContent = '00';

  // Создание Кнопки
  const timerBtn = document.createElement('button');
  timerBtn.classList.add('timers__btn');
  timerBtn.textContent = 'Начать заново';

  timerBtn.addEventListener('click', () => {
    window.location.reload();
  });

  // Добавление общего контейнера для таймера
  APP.appendChild(timeWrap);

  // Добавление контейнера для таймера
  timeWrap.appendChild(timers);

  // Добавление Кнопки
  timeWrap.appendChild(timerBtn);

  // Добавление контейнера для Минуты
  timers.appendChild(timerMinutes);

  // Добавление контейнера для Точки
  timers.appendChild(timerDot);

  // Добавление контейнера для Секунды
  timers.appendChild(timerSeconds);
}
