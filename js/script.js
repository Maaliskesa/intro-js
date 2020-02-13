function moveArms() {
    var now = new Date(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        hr = now.getHours(),
        tick = 360/60;
    
    var secondArmPosition = tick * sec,
        minuteArmPosition = tick * min + sec/60 * tick,
        hourArmPosition = tick * 5 * hr + min/60 * 5;
    
    var SECONDHAND = document.querySelector('#second'),
        HOURHAND = document.querySelector('#hour'),
        MINUTEHAND = document.querySelector('#minute');

    function update() {
        secondArmPosition += tick;
        minuteArmPosition += tick/60;
        hourArmPosition += tick/60/60;

        SECONDHAND.style.transform = 'rotate(' + secondArmPosition + 'deg)';
        HOURHAND.style.transform = 'rotate(' + hourArmPosition + 'deg)';
        MINUTEHAND.style.transform = 'rotate(' + minuteArmPosition + 'deg)';
    };

    update();
    setInterval(update, 1000);
}

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(moveArms);

// var myMusic = document.getElementById("music");
// function play() {
//     myMusic.play();
// }

// function pause() {
//     myMusic.pause();
// }