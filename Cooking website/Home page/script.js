const firstHalo = document.getElementById("up-side");
const secondHalo = document.getElementById("down-side");
const startCookingLink = document.getElementById("start-cooking");
const logInLink = document.getElementById("log-in");
const cookingLink = document.getElementById("firstLink");
const logLink = document.getElementById("secondLink");


cookingLink.onmouseover = bright;
cookingLink.onmouseout = noBright;

function bright() {
    startCookingLink.style.color = "#FFA6D8";
    firstHalo.src = "img/up-side2.png";
}

function noBright() {
    startCookingLink.style.color = "#fe77c4";
    firstHalo.src = "img/up-side.png";
}

logLink.onmouseover = brightDown;
logLink.onmouseout = noBrightDown;

function brightDown() {
    logInLink.style.color = "#E9FFCF"; 
    secondHalo.src = "img/down-side2.png";
}

function noBrightDown() {
    logInLink.style.color = "#34FFB6"; 
    secondHalo.src = "img/down-side.png";
}



const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            select.innerText = option.innerHTML;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});



