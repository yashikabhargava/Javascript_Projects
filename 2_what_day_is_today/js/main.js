document.querySelector('#check').addEventListener('click', checkTheDay);

function checkTheDay() {

    const day = document.querySelector('#day').value.toLowerCase();

    if(day === "tuesday" || day === "thursday") {

        document.querySelector('#result').innerText = "Today is Class Day!";
        document.querySelector('#resultSection').style.backgroundColor = 'white';

    } else if(day === "saturday" || day === "sunday") {

        document.querySelector('#result').innerText = "It's a Weekend!!"
        document.querySelector('#resultSection').style.backgroundColor = 'white';

    } else {

        document.querySelector('#result').innerText = 'Boooringgggg Dayyyyy!!!'
        document.querySelector('#resultSection').style.backgroundColor = 'white';
    }
}