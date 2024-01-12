let [milisecond , seconds , minutes , hours] = [0 , 0 , 0 , 0];
let display = document.querySelector(".display");
let int = null;

document.getElementById("start-Button").addEventListener("click" , () => {
    
    if(int !== null) {

        clearInterval(int);
    }

    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-Button").addEventListener("click" , () => {
    
    clearInterval(int);
});

document.getElementById("reset-Button").addEventListener("click" , () => {
    
    clearInterval(int);
    [milisecond , seconds , minutes , hours] = [0 , 0 , 0 , 0];
    display.innerHTML = "00 : 00 : 00";
});

function displayTimer() {

    milisecond += 10;

    if(milisecond == 1000) {

        milisecond = 0;
        seconds++ ;

        if(seconds == 60) {
            
            seconds = 0;
            minutes++;

            if(minutes == 60) {

                minutes = 0;
                hours++;

            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milisecond < 10 
    ? "00" + milisecond
    : milisecond < 100
    ? "0" + milisecond
    : milisecond;
    
    display.innerHTML = `${h} : ${m} : ${s}`;

}