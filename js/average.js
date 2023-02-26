const average = function () {
    APP.innerHTML = "";
    
    timers();
    CONTAINER();

    for (let i = 0; i < 12; i++) {
        backCard();
    }
};