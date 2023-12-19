let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function showTime(){
    let date = new Date();
    
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 30 * hh + mm / 2;     /* 1 hour=360/12=30 */
    let mRotate = 6 * mm;    /* 1 minunte = 360/60=6 deg */
    let sRotate = 6 * ss;   /* 1 second = 360/60=6 deg */

    hr.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;
}

setInterval(showTime, 1000);