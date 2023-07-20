const date = new Date();

let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

document.getElementById('calculate').addEventListener('click', calculateAge);

function calculateAge() {

    let birthDay = document.getElementById('day').value;
    let birthMonth = document.getElementById('month').value;
    let birthYear = document.getElementById('year').value;

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(currentDay < birthDay) {
        currentDay += month[currentMonth - 1];
        currentMonth -= 1;
    }

    if(currentMonth < birthMonth) {
        currentMonth += 12;
        currentYear -= 1; 
    }

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;


    document.getElementById('main').style.backgroundColor ='white';
    document.getElementById('main').style.borderBottomRightRadius ='150px';
    document.getElementById('displayYear').innerText = `${ageYears} Years`;

    document.getElementById('displayMonth').innerText = `${ageMonths} Months`;

    document.getElementById('displayDay').innerHTML = `${ageDays} Days`;


    // this was my first approach
    // if(currentMonth < birthMonth){
    //     document.getElementById('displayYear').innerText = `${(currentYear - birthYear) - 1} Years`;

    //     document.getElementById('displayMonth').innerText = `${12 - (birthMonth - currentMonth) - 1} Months`;

    // } else{
    //     document.getElementById('displayYear').innerText = `${currentYear - birthYear} Years`;

    //     document.getElementById('displayMonth').innerText = `${(currentMonth - birthMonth)} Months`;
    // }

    // if(currentDay < birthDay){
    //     document.getElementById('displayDay').innerHTML = `${30 - (birthDay - currentDay) - 1} Days`;

    // } else{
    //     document.getElementById('displayDay').innerHTML = `${currentDay - birthDay} Days`;
    // }

}

