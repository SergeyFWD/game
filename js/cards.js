function backCard() {
    // Создание карты
    const gameCardBack = document.createElement('button');
    gameCardBack.classList.add('game__card-back');

    const gameContainer = document.querySelector('.game__container');

    // Добавление карты
    gameContainer.appendChild(gameCardBack);
}