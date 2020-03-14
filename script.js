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