function updateTime() {     // create a function 
    var clock = new Date();       // create a new variable
    var clock_display = ("0" + clock.getHours()).slice(-2) + ":" + ("0" + clock.getMinutes()).slice(-2) + ":" + ("0" + clock.getSeconds()).slice(-2);
    document.getElementById('time').innerHTML = clock_display; // update element
}

setInterval(updateTime, 1000);

