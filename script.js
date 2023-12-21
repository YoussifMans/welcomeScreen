function updateClock() {
    var now = new Date(); // current date
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Pad minutes with a zero if needed
    minutes = minutes < 10 ? '0'+minutes : minutes;

    var timeStr = hours + ':' + minutes + ' ' + amPm;

    // Set the time string to the clock div
    document.getElementById('clock').innerHTML = timeStr;

    // Call the function every minute
    setTimeout(updateClock, 60000);
}

// Call the function initially to start the clock
updateClock();




function updateDate() {
    var now = new Date(); // current date

    var day = now.getDate();
    var month = now.toLocaleString('default', { month: 'long' });
    var year = now.getFullYear();

    var dateStr = day + ', ' + month + ', ' + year;

    // Set the date string to the date div
    document.getElementById('date').innerHTML = dateStr;
}

// Call the function initially to start the date
updateDate();


function startToggle() {
    // Get the element by its id
    var element = document.getElementById('start');

    // Use a switch case to toggle the display property
    switch (element.style.bottom) {
        case '55px':
            element.style.bottom = '-1000px';
            break;
        case '-1000px':
            element.style.bottom = '55px';
            break;
        default:
            element.style.bottom = '55px';
            break;
    }
}
