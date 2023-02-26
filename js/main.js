const APP = document.querySelector(".app");

const CONTAINER = () => {
        // Создание общего контейнера для игры
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game__container');
    
        // Добавление общего контейнера для игры
        APP.appendChild(gameContainer);
}