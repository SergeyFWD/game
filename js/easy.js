const easy = function () {
    APP.innerHTML = "";
    
    timers();
    CONTAINER();

    for (let i = 0; i < 6; i++) {
        backCard();
    }
};