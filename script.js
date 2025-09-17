let a ="Hello";
let b ="World";
let c ="I am ready for ya!"
let d = a + b

let value = true;
let noValue = null;
console.log(a+b);
console.log(value);
console.log(noValue);

alert ("Bill, Bill, Bill, Bill, Bill");

//Be able to click on the button and show the cohort name
//1. When the page loads, show a name
//Create an array

let cohortNames = ['I CAN CODE', 'I am IMPERVIOUS to rage bait', 'Science Rules!', 'Xenon is Boujie Anesthesia',  'Your Code Never Bugs!', 'Humans Are GREAT', 'YOU ARE Destined for Greatness', 'You WILL change the World! (for the better)', 'Fearless QUEEN!!', 'YOU are UNstoppable', 'YOU are Bill Nye', 'EVERYTHING IS AS IT SHOULD BE', 'YOU GOT THIS', 'you ARE a leader',  'YOU ARE SCIENCE'];
    

function updateName() {
    let randomNameNum = Math.floor(Math.random() * cohortNames.length);
    let randomName = cohortNames[randomNameNum];
    let nameEl = document.getElementById("random-name");
    nameEl.innerHTML = randomName;
}

// Run once when the page loads
updateName();

// Select the button
let theButton = document.getElementById("the-button");

// Listen for clicks
theButton.addEventListener('click', function() {
    updateName();
});

let hasPlayed = false;
let audio = new Audio('BillNye_RSI.wav');
// // Select the button
// let playButton = document.getElementById("the-button"); 
// // Play sound on click
theButton.addEventListener('click', function() {
    if (!hasPlayed) {
    audio.play();
    hasPlayed = true;
    theButton.audio.hasPlayed = true;
    }
});

console.log(document.getElementsByClassName ("favorite styled"));