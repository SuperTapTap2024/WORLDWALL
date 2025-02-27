let toguess = 'דביל'
let inputElement = document.getElementById('wordid')


let d1 = document.getElementById('letd1')
let d2 = document.getElementById('letd2')
let d3 = document.getElementById('letd3')
let d4 = document.getElementById('letd4')
//******************************************************************************************************* */
function check() {
    let Let1 = inputElement.value.charAt(0)
    let Let2 = inputElement.value.charAt(1)
    let Let3 = inputElement.value.charAt(2)
    let Let4 = inputElement.value.charAt(3)

//***************************************************************************************************** */
d1.innerHTML = Let1
d2.innerHTML = Let2
d3.innerHTML = Let3
d4.innerHTML = Let4
//************************************************************************************************ */
checkG()
checkR()
checkY()
}

let attempts = 0; 

const Bcheck = document.getElementById('check')
function checkG() {
    let correct = 0;

    if (d1.innerHTML == 'ד') {
        d1.className = 'letGREEN';
        correct++;
    }

    if (d2.innerHTML == 'ב') {
        d2.className = 'letGREEN';
        correct++;
    }

    if (d3.innerHTML == 'י') {
        d3.className = 'letGREEN';
        correct++;
    }

    if (d4.innerHTML == 'ל') {
        d4.className = 'letGREEN';
        correct++;
    }

    attempts++; // מגדילים את מספר הניסיונות

    if (correct === 4) {
        alert("כל הכבוד!");
    } else if (attempts >= 6) {
        alert("ניסית מספיק");
        Bcheck.innerHTML = "❌"; 
        Bcheck.disabled = true; 
    }
}

function checkY() {
    if (d1.innerHTML != 'ד' && (d1.innerHTML == 'ב' || d1.innerHTML == 'י' || d1.innerHTML == 'ל')) {
        d1.className = 'letGREY';
    }

    if (d2.innerHTML != 'ב' && (d2.innerHTML == 'ד' || d2.innerHTML == 'י' || d2.innerHTML == 'ל')) {
        d2.className = 'letGREY';
    }

    if (d3.innerHTML != 'י' && (d3.innerHTML == 'ב' || d3.innerHTML == 'ד' || d3.innerHTML == 'ל')) {
        d3.className = 'letGREY';
    }

    if (d4.innerHTML != 'ל' && (d4.innerHTML == 'ב' || d4.innerHTML == 'י' || d4.innerHTML == 'ד')) {
        d4.className = 'letGREY';
    }
}

function checkR() {
    if (d1.innerHTML != 'ד' && d1.innerHTML != 'ב' && d1.innerHTML != 'י' && d1.innerHTML != 'ל') {
        d1.className = 'letRED';
    }

    if (d2.innerHTML != 'ד' && d2.innerHTML != 'ב' && d2.innerHTML != 'י' && d2.innerHTML != 'ל') {
        d2.className = 'letRED';
    }

    if (d3.innerHTML != 'ד' && d3.innerHTML != 'ב' && d3.innerHTML != 'י' && d3.innerHTML != 'ל') {
        d3.className = 'letRED';
    }

    if (d4.innerHTML != 'ד' && d4.innerHTML != 'ב' && d4.innerHTML != 'י' && d4.innerHTML != 'ל') {
        d4.className = 'letRED';
    }
}

