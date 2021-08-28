const clock = document.querySelector("h2#clock");

/* Use PadStart
function addZeroIfNeed(number){
    if (number < 10)
        return `0${number}`
    else
        return `${number}`
}
*/

function getClock() {
    const date = new Date();
    let hours = `${date.getHours()}`.padStart(2,"0");
    let minutes = `${date.getMinutes()}`.padStart(2,"0");
    let seconds = `${date.getSeconds()}`.padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`

/*
    let hours = addZeroIfNeed(date.getHours());
    let minutes = addZeroIfNeed(date.getMinutes());
    let seconds = addZeroIfNeed(date.getSeconds());
    
    clock.innerText = `${hours}:${minutes}:${seconds}`
*/
}

getClock()
setInterval(getClock, 1000)
//setTimeout(getClock, 1000)