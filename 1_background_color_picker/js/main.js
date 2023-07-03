const PURPLE = 'rgb(158, 77, 234)';
const GREEN = 'rgb(151, 210, 151)';
const BLUE = 'rgb(122, 122, 255)';
const YELLOW = 'rgb(167, 153, 0)';
const ORANGE = 'rgb(255, 176, 31)';
const RED = 'rgb(255, 108, 108)';



document.getElementById('purple').addEventListener('click', changeToPurple);

document.getElementById('green').addEventListener('click', changeToGreen);

document.getElementById('blue').addEventListener('click', changeToBlue);

document.getElementById('yellow').addEventListener('click', changeToYellow);

document.getElementById('orange').addEventListener('click', changeToOrange);

document.getElementById('red').addEventListener('click', changeToRed);

function changeToPurple() {
    document.querySelector('body').style.backgroundColor = PURPLE;

    document.querySelector('body').style.color = 'white';

    document.querySelector('main').style.backgroundColor = 'white';
}

function changeToGreen() {
    document.querySelector('body').style.backgroundColor = GREEN;

    document.querySelector('body').style.color = 'white';

    document.querySelector('main').style.backgroundColor = 'white';
}

function changeToBlue() {
    document.querySelector('body').style.backgroundColor = BLUE;

    document.querySelector('body').style.color = 'white';

    document.querySelector('main').style.backgroundColor = 'white';
}

function changeToYellow() {
    document.querySelector('body').style.backgroundColor = YELLOW;

    document.querySelector('body').style.color ='white';

    document.querySelector('main').style.backgroundColor = 'white';

    document.querySelector('main').style.backgroundColor = 'white'
}

function changeToOrange() {
    document.querySelector('body').style.backgroundColor = ORANGE;

    document.querySelector('body').style.color = 'white';

    document.querySelector('main').style.backgroundColor = 'white';
}

function changeToRed() {
    document.querySelector('body').style.backgroundColor = RED;

    document.querySelector('body').style.color = 'white';

    document.querySelector('main').style.backgroundColor = 'white';
}