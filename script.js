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

let slideWidth = 850,
    sliderList = document.querySelector('.slider-wrap__list'),
    sliderMain = document.querySelector('.slider'),
    slides = document.querySelectorAll('.slider-wrap__slider'),
    prev = document.querySelector('.slider-links__arrow-prev'),
    next = document.querySelector('.slider-links__arrow-next'),
    pos = 0;

sliderList.style.width = slides.length * slideWidth + 'px';

prev.addEventListener('click', scrollToPrev);
next.addEventListener('click', scrollToNext);

function scrollToPrev() {
    event.preventDefault();
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
    if (sliderMain.classList.contains('new-bg')) {
        sliderMain.classList.remove('new-bg');
    } else sliderMain.classList.add('new-bg');
}


function scrollToNext() {
    event.preventDefault();
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
    if (sliderMain.classList.contains('new-bg')) {
        sliderMain.classList.remove('new-bg');
    } else sliderMain.classList.add('new-bg');
}

// Add active class to portfolioMenu links

let portfolioMenu = document.querySelector('.photos__list'),
    portfolioLinks = document.querySelectorAll('.photos__link');

portfolioMenu.addEventListener('click', function (event) {
    portfolioLinks.forEach(function (item) {
        event.preventDefault();

        item.classList.remove('active-btn');
        event.target.classList.add('active-btn');

    });
});


// Shuffle pictures

let listImages = document.querySelector('.photos__images'),
    images = document.querySelectorAll('.photos__img'),
    portfolioBtnAll = document.getElementById('photos__item_all'),
    portfolioBtnWeb = document.getElementById('photos__item_web'),
    portfolioBtnDesign = document.getElementById('photos__item_design'),
    portfolioBtnArtwork = document.getElementById('photos__item_artwork');

function shufflePictures(event) {
    if (!event.target.classList.contains('active-btn')) {
        for (let i = images.length; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            listImages.insertBefore(images[randomIndex], images[i]);
        }
    }
}

portfolioBtnAll.addEventListener('click', shufflePictures);
portfolioBtnWeb.addEventListener('click', shufflePictures);
portfolioBtnDesign.addEventListener('click', shufflePictures);
portfolioBtnArtwork.addEventListener('click', shufflePictures);

// Image border

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (event) {
        images.forEach(function (item) {
            if (event.target !== item) {
                item.classList.remove('photos__border');
            }
        });


        if (event.target.classList.contains('photos__border')) {
            event.target.classList.remove('photos__border');
        } else event.target.classList.add('photos__border');
    });
}


// Form

let submitBtn = document.querySelector('.quote__btn'),
    formWindow = document.querySelector('.modal-window'),
    contentWindow = document.querySelector('.modal-window__content');
okFormBtn = document.querySelector('.modal-window__submit-btn'),
    formInputs = document.querySelectorAll('.quote__input'),
    formTextarea = document.querySelector('.quote__textarea'),
    nameHint = document.querySelector('.quote__name-hint'),
    mailHint = document.querySelector('.quote__mail-hint'),
    mailSecondHint = document.querySelector('.quote__mail-hint-second'),
    subjectText = document.querySelector('.modal-window__subject'),
    describeText = document.querySelector('.modal-window__describe');

function cleanForm() {
    formInputs[0].value = '';
    formInputs[1].value = '';
    formInputs[2].value = '';
    formTextarea.value = '';
    contentWindow.style.width = '350px';
    contentWindow.style.height = '200px';
}

okFormBtn.addEventListener('click', function () {
    formWindow.classList.add('none');
    cleanForm();
});

window.addEventListener('click', function (event) {
    if (event.target === formWindow) {
        formWindow.classList.add('none');
        cleanForm();
    }
});


submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (formInputs[0].value === '') {
        nameHint.classList.remove('none');
    }

    if (formInputs[1].value === '') {
        mailHint.classList.remove('none');
    } else if (formInputs[1].value.search(/.+@.+\..+/i) === -1) {
        mailSecondHint.classList.remove('none');
    }

    if (formInputs[0].value !== '' && formInputs[1].value.search(/.+@.+\..+/i) !== -1) {
        if (formInputs[2].value === '') {
            subjectText.textContent = 'Тема: Без темы'
        } else subjectText.textContent = 'Тема: ' + formInputs[2].value;

        if (formTextarea.value === '') {
            describeText.textContent = 'Описание: Без описания'
        } else describeText.textContent = 'Описание: ' + formTextarea.value;


        if (formTextarea.value.length > 101 && formTextarea.value.length <= 401) {
            contentWindow.style.width = '410px';
            contentWindow.style.height = '300px';
        }

        if (formTextarea.value.length >= 402 && formTextarea.value.length < 601) {
            contentWindow.style.width = '440px';
            contentWindow.style.height = '370px';
        }

        if (formTextarea.value.length >= 601 && formTextarea.value.length <= 1000) {
            contentWindow.style.width = '520px';
            contentWindow.style.height = '450px';
        }

        formWindow.classList.remove('none');
    }
});

formInputs[0].addEventListener('click', function () {
    nameHint.classList.add('none');
});

formInputs[1].addEventListener('click', function () {
    mailHint.classList.add('none');
    mailSecondHint.classList.add('none');
});