function Start(){
    Clock();
    Greeting();
    LongDate();
}

function Clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =
        h + ":" + m;
    var t = setTimeout(Clock, 500);
};

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function Greeting(){
    var today = new Date();
    var h = today.getHours();
    console.log(h);

    if(h>=5 && h<=11){
        document.getElementById('greeting').innerHTML = "Good Morning!";
    }
    if(h>=12 && h<=16) {
        document.getElementById('greeting').innerHTML = "Good Afternoon!";
    }
    if(h>=17 && h<=23) {
        document.getElementById('greeting').innerHTML = "Good Evening!";
    }
    if(h>=0 && h<=4) {
        document.getElementById('greeting').innerHTML = "Good Night!";
    }
}

function LongDate(){
    var today = new Date();

    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = weekday[today.getDay()];

    var d = today.getDate();

    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var m = month[today.getUTCMonth()];

    var total = day + ",  " + d + "  " + m;
    console.log(total);

    document.getElementById('date').innerHTML = total;
}
