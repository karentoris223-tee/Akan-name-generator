const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const maleNames = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];

const femaleNames = ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"];

const resultsText = document.querySelector(".results")

let month = parseInt(document.getElementById("month"));
let day = parseInt(document.getElementById("day"));
let year = parseInt(document.getElementById("year"));
let gender = document.querySelector('input[name="gender"]:checked');

if (month < 1 || month > 12) {
    resultsText.textContent = "enter a valid month";
}
if (day < 1 || day > 31) {
    resultsText.textcontent = "enter a valid day";
}

let CC = Math.floor(year / 100);
let YY = year % 100;
let MM = month;
let DD = day;

let d = ((CC/4) - (2*CC) - 1 + ((5*YY)/4) + ((26*(MM+1))/10) + DD ) % 7;
let dayIndex = Math.floor(d);
if (dayIndex < 0) dayIndex = dayIndex + 7;

let akanName;
if (gender === "male") {
    akanName = maleNames[dayIndex];
} else if (gender === "female") {
    akanName = femaleNames[dayIndex];
} else {
    resultText.textcontent = "Please select a gender";
}

resultText.textcontent = 'Your Akan name is ${akanName}.';


