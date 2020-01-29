(function () {
    var itemClassName = 'slider__photo';
        items = document.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0;

    // Set event listeners
    function setEventListeners() {
        var next = document.getElementsByClassName('slider__button--next')[0],
        prev = document.getElementsByClassName('slider__button--prev')[0];

        next.addEventListener('click', getNext);
        prev.addEventListener('click', getPrev);
    }

    function getNext() {
        // TODO 
        // slide = 0 has been given above
        /* get items' elements with index of a slide, remove active class from it
        slide++ to increase the value of the slide by one
        get item's element with the index of the slide, and move active class to it */
        
        items[slide].classList.remove('active');
        if (slide === totalItems - 1) {
            slide = 0;
        } else {
            slide++;
        }
        items[slide].classList.add('active'); 
    }

    function getPrev() {
        // TODO  

        items[slide].classList.remove('active');
        if (slide === 0) {
            slide = 4;
        } else {
            slide--;
        }
        items[slide].classList.add('active'); 

    }

    function initSlider() {
        // setInitialClasses();
        setEventListeners();
        
        // Set moving to false so that the slider becomes interactive
        moving = false;
    }

    initSlider();
})();