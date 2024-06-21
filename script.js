'use script'

// using the date object / creating the date object
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();

console.log(date, {hour, minute, seconds})


// 2. Object-Oriented Clock:
// • Task: Design a Clock object with properties like hours, minutes, and seconds.
// • Evaluation:
// o Code Review: Assess the correct use of properties and potential use of
// a constructor function for clock creation.
// o Output Test: Confirm the ability to create clock instances and access
// their properties.