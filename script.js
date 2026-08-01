const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const maleNames = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];

const femaleNames = ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"];

document.getElementById("akanName").addEventListener("submit",) 
    e.preventDefault();

let month = parseInt(document.getElementById("month").value);
let day = parseInt(document.getElementById("day").value);
let year = parseInt(document.getElementById("year").value);
let gender = document.queryselector('input[name="gender"]:checked').value;

if (month < 1 || month > 12) {
    alert("enter a valid month");
    return;
}
if (day < 1 || day > 31) {
    alert("enter a valid day")
    return;
}

let CC = Math.floor(year / 100);
let YY = year % 100;
let MM = month;
let DD = day;

let d = ((CC/4) - (2*CC) - 1 + ((5*YY)/4) + ((26*(MM+1))/10) + DD ) % 7;
let dayIndex = Math.floor(d);
if (dayIndex < 0) dayIndex = dayIndex + 7;

let akanName = gender === "male"? maleNames[dayIndex] : femaleNames[dayIndex];


