const hard = function () {
    APP.innerHTML = "";
    
    timers();
    CONTAINER();

    for (let i = 0; i < 18; i++) {
        backCard();
    }
};