// Add active class to menu links

let menu = document.querySelector('.nav__menu'),
    menuLinks = document.querySelectorAll('.nav__link');

menu.addEventListener('click', function (event) {
    menuLinks.forEach(function (item) {
        item.classList.remove('active');
        event.target.classList.add('active');
    });
});

//Smooth scroll

menuLinks.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        let anchor = item.getAttribute('href').substr(1);

        document.getElementById(anchor).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Black screen

let iphoneVerticalScreen = document.querySelector('.slider-wrap__screen-wrap-vertical'),
    iphoneHorizontalScreen = document.querySelector('.slider-wrap__screen-wrap-horizontal'),
    iphoneVerticalScreenOne = document.querySelector('.slider-wrap__screen-wrap-vertical-one'),
    iphoneVerticalScreenTwo = document.querySelector('.slider-wrap__screen-wrap-vertical-two'),
    iphoneVerticalScreenThree = document.querySelector('.slider-wrap__screen-wrap-vertical-three'),
    iphoneBlackVertical = document.querySelector('.slider-wrap__black-vertical'),
    iphoneBlackHorizontal = document.querySelector('.slider-wrap__black-horizontal'),
    iphoneBlackVerticalOne = document.querySelector('.slider-wrap__black-vertical-one'),
    iphoneBlackVerticalTwo = document.querySelector('.slider-wrap__black-vertical-two'),
    iphoneBlackVerticalThree = document.querySelector('.slider-wrap__black-vertical-three');

function toggleScreen(screen, blackScreen) {
    screen.addEventListener('click', function () {
        if (blackScreen.classList.contains('none')) {
            blackScreen.classList.remove('none');
        } else blackScreen.classList.add('none');
    });
}

// Vertical IPhone (slider 1)

toggleScreen(iphoneVerticalScreen, iphoneBlackVertical);

// Horizontal IPhone (slider 1)

toggleScreen(iphoneHorizontalScreen, iphoneBlackHorizontal);

// Vertical IPhone one (slider 2)

toggleScreen(iphoneVerticalScreenOne, iphoneBlackVerticalOne);

// Vertical IPhone two (slider 2)

toggleScreen(iphoneVerticalScreenTwo, iphoneBlackVerticalTwo);

// Vertical IPhone three (slider 2)

toggleScreen(iphoneVerticalScreenThree, iphoneBlackVerticalThree);

// Slider

let slideWidth = 1020,
    sliderList = document.querySelector('.slider-wrap__list'),
    slides = document.querySelectorAll('.slider-wrap__slider'),
    prev = document.querySelector('.slider-links__arrow-prev'),
    next = document.querySelector('.slider-links__arrow-next'),
    pos = 0;

sliderList.style.width = slides.length * slideWidth + 'px';

prev.addEventListener('click', scrollToPrev);
next.addEventListener('click', scrollToNext);

function scrollToPrev() {
    pos--;

    if (pos < 0) {
        let children = sliderList.children;
        sliderList.style.transition = null;
        sliderList.style.left = -(pos + 2) * slideWidth + 'px';
        sliderList.insertBefore(children[slides.length - 1], children[0]);
        children[0].offsetParent;
        pos++;
    }

    sliderList.style.transition = 'left 0.6s ease-in-out';
    sliderList.style.left = -(slideWidth * pos) + 'px';
}


function scrollToNext() {
    pos++;

    if (pos > slides.length - 1) {
        let children = sliderList.children;
        sliderList.style.transition = null;
        sliderList.style.left = -(pos - 2) * slideWidth + 'px';
        sliderList.appendChild(children[0]);
        children[0].offsetParent;
        pos--;
    }

    sliderList.style.transition = 'left 0.6s ease-in-out';
    sliderList.style.left = -(slideWidth * pos) + 'px';
}