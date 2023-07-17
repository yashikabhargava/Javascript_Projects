const synth = window.speechSynthesis;
document.getElementById('calculate').addEventListener('click', calculateTip);


function calculateTip() {

    const bill = document.getElementById('bill').value;

    const tip = document.getElementById('tip').value;

    const noOfPeople = document.getElementById('noOfPeople').value;

    const tipPerPerson = (bill * (tip/100)) / noOfPeople;

    const totalPerPerson = (bill * (1 + (tip/100))) / noOfPeople;

    document.getElementById('tipAmount').innerText = `₹ ${tipPerPerson}`;

    document.getElementById('totalAmount').innerText = `₹ ${totalPerPerson}`;

    yellTip = `The tip per person is rupees ${tipPerPerson}`

    yellTotal = `The total amount per person is rupees ${totalPerPerson}`

    let yellThisTip = new SpeechSynthesisUtterance(yellTip);

    let yellThisTotal = new SpeechSynthesisUtterance(yellTotal);

    synth.speak(yellThisTip);
    synth.speak(yellThisTotal);

}