const second = 1000,
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour;

let daysElement = document.querySelector(".days")
let hoursElement = document.querySelector(".hours")
let  minutesElement = document.querySelector(".minutes")
let secondsElement = document.querySelector(".seconds")
let heading = document.querySelector("h1")
let counterTimer = document.querySelector(".counterTimer")

// console.log(`${day} ${hour} ${minute} ${second}`)

const TimerFunction  = () =>{

let now = new Date();
let dd = JSON.stringify(now.getDate()).padStart(2,"0");
 mm = JSON.stringify(now.getMonth()+1).padStart(2,"0");
 yyyy = JSON.stringify(now.getFullYear()).padStart(2,"0");

 let enteredDay = prompt("Enter the Month").padStart(2,"0");
 let enteredMonth = prompt("Enter the Day").padStart(2,"0");
//  let enteredYear = prompt("Enter the Day").padStart(2,"0");

if(enteredDay<12 && enteredMonth<=31){

let targetDate = `${enteredDay} ${enteredMonth} ${yyyy} `
 now = `${mm} ${dd} ${yyyy} `

 if(now>targetDate){
    targetDate = `${enteredDay} ${enteredMonth} ${yyyy+1} `
 }



const intervalId = setInterval(() => {
    const Timer = new Date(targetDate).getTime()
const Today =  new Date().getTime()

const leftTime = Timer-Today;
const leftDay = Math.floor(leftTime/day)
const leftHour = Math.floor((leftTime % day)/hour)
const leftMinute = Math.floor((leftTime % hour)/minute);
const leftSecond = Math.floor((leftTime % minute)/second)

daysElement.innerText = leftDay;
hoursElement.innerText = leftHour;
minutesElement.innerText = leftMinute;
secondsElement.innerText = leftSecond;

if(leftTime<0){
    counterTimer.style.display = "none"
    heading.innerText="Time's Up"
    clearInterval(intervalId);
}

// console.log(`${leftDay} ${leftHour} ${leftMinute} ${leftSecond}`)

// console.log(Timer);
// console.log(Today);
// console.log(leftTime);
// console.log(Math.floor((leftTime % day)/hour));
// console.log(Math.floor((leftTime % hour)/minute));
// console.log(Math.floor((leftTime % minute)/second));

}, 1000);
}
}
TimerFunction()