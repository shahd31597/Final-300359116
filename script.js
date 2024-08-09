function getDate() {
    var dateInput = document.getElementById('birthday').value;
    return new Date(dateInput);
}

function start() {
    var countDownDate = getDate();
    var now = new Date();

var interval = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
var dicseconds = Math.floor((distance % 1000) / 100); // 0.1 sec

document.getElementById("demo").innerHTML = `${days} <sub>days</sub> ${hours} <sub>hrs</sub> ${minutes} <sub>mins</sub> ${seconds} <sub>secs</sub> ${dicseconds} <sub>dicsecs</sub>`;

if (distance < 0) {
    clearInterval(interval);
    document.getElementById("demo").innerHTML = "EXPIRED";
}
if (countDownDate <= now) {
        alert("Date is Expired");
        return;
    }
}, 100);
}
