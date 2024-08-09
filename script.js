// get the date from the input field
function getDate() {
    var dateInput = document.getElementById('birthday').value;
    return new Date(dateInput);
}

// start the countdown
function start() {
    var countDownDate = getDate();
    var now = new Date();

    // Error checking for past date
    if (countDownDate <= now) {
        alert("Date is Expired");
        return;
    }

    // Update the count down every 0.1 second (dicseconds)
    var interval = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes, seconds and dicseconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var dicseconds = Math.floor((distance % 1000) / 100); // 0.1 sec

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = `${days} <sub>days</sub> ${hours} <sub>hrs</sub> ${minutes} <sub>mins</sub> ${seconds} <sub>secs</sub> ${dicseconds} <sub>dicsecs</sub>`;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 100); // update every 100ms (0.1 sec)
}