'use script'

// using the date object / creating the date object
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(date, {hours, minutes, seconds})


// 2. Object-Oriented Clock:
// • Task: Design a Clock object with properties like hours, minutes, and seconds.
// • Evaluation:
// o Code Review: Assess the correct use of properties and potential use of
// a constructor function for clock creation.
// o Output Test: Confirm the ability to create clock instances and access
// their properties.

// creating an object clock alt2.0
const Clock = function(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    this.getFormattedTime = function () {
        const padInput = (data) => data.toString().padStart(2, 0);
        
        return `${padInput(hours)}:${padInput(minutes)}:${padInput(seconds)}`;
    };
}

const clock = new Clock(hours, minutes, seconds);
console.log(clock);
console.log(clock.getFormattedTime());


// const getFormattedTime = function() {
//     // should return a string format in HH:MM:SS
//     const padInput = (data) => data.toString().padStart(2, 0);
    
//     return `${padInput(hours)}:${padInput(minutes)}:${padInput(seconds)}`;
// }
// getFormattedTime();




/**
 * Dynamic Display:
• Task: Create a function to display the clock on a webpage (e.g., using a div
element).
• Evaluation:
o Code Review: Assess the use of DOM manipulation to update the clock
display.
o Output Test: Confirm that the clock display updates every second with
the correct time.
 */