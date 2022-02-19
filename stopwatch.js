let seconds=0;
let minutes=0;
let hours=0;

let time=document.querySelector(".display");
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let reset=document.querySelector("#reset");

function displayTime()
{
    seconds++;
    if(seconds==60)
    {
        minutes++;
        seconds=0;
        if(minutes==60)
        {
            hours++;
            minutes=0;
        }
    }

    let s=seconds<10 ? "0"+seconds : seconds;
    let m=minutes<10 ? "0"+minutes : minutes;
    let h=hours<10 ? "0"+hours : hours;

    time.innerHTML= `${h}: ${m}: ${s}`;
}

let count = null; 

start.addEventListener("click",function()
{
    count = setInterval(displayTime,1000);
}); 

stop.addEventListener("click",function()
{
    clearInterval(count);
});

reset.addEventListener("click",function()
{
    clearInterval(count);
    seconds=0;
    minutes=0;
    hours=0;
    time.innerHTML="00 : 00 : 00";
});