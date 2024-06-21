'use script'

// using the date object / creating the date object
const date = new Date();
console.log(date);
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();



// 2. Object-Oriented Clock:
const Clock = function(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    this.getFormattedTime = function () {
        const padInput = (data) => data.toString().padStart(2, 0);
        
        return `${padInput(this.hours)}:${padInput(this.minutes)}:${padInput(this.seconds)}`;
    };

    this.get12HourTime = function() {

    };

    this.updateTime = function (hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}

const clock = new Clock(hours, minutes, seconds);



// const getFormattedTime = function() {
//     // should return a string format in HH:MM:SS
//     const padInput = (data) => data.toString().padStart(2, 0);
    
//     return `${padInput(hours)}:${padInput(minutes)}:${padInput(seconds)}`;
// }
// getFormattedTime();



const display = function() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const clockContainer = document.querySelector('.clock');
    clock.updateTime(hours, minutes, seconds);

    clockContainer.textContent = clock.getFormattedTime();
}


setInterval(display, 1000);
// const print = () => console.log('hi')

// Clock Customization:
// • Task: Add options to customize the clock (e.g., 12/24-hour format, time zone,
// colors).
// • Evaluation:
// o Code Review: Evaluate the implementation of customization options
// within the Clock object.
// o Output Test: Verify that customization options affect the clock display
// as expected.

