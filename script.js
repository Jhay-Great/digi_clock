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
}
const clock = new Clock(hours, minutes, seconds);
console.log(clock);

/**
 * Time Formatting:
• Task: Add methods to the Clock object for formatting time:
o getFormattedTime(): Returns a string in the format “HH:MM:SS”.
o get12HourTime(): Returns a string with AM/PM.
Evaluation:
o Code Review: Check for accurate time formatting logic within the
methods.
o Output Test: Verify that formatted time strings are produced correctly.
 */