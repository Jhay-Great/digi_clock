'use script'

// using the date object / creating the date object
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();



// 2. Object-Oriented Clock:
const Clock = function(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this._twelveHourClock = false;
    this._period;

    this._padInput = (data) => data.toString().padStart(2, 0);

    this.getFormattedTime = function () {
        return `${this._padInput(this.hours)}:${this._padInput(this.minutes)}:${this._padInput(this.seconds)}`;
    };

    this.get12HourTime = function() {
        if (this.hours === 0) {
            this.hours = 12;
            this._period = 'AM';
            return `${this._padInput(this.hours)}:${this._padInput(this.minutes)}:${this._padInput(this.seconds)} ${this._period}`;
            
        };

        if (this.hours >= 12) {
            this._period = 'PM';
            if (this.hours > 12) {
                this.hours -= 12;
            }
            return `${this._padInput(this.hours)}:${this._padInput(this.minutes)}:${this._padInput(this.seconds)} ${this._period}`;
        }
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


// Clock Customization:
// • Task: Add options to customize the clock (e.g., 12/24-hour format, time zone,
// colors).
// • Evaluation:
// o Code Review: Evaluate the implementation of customization options
// within the Clock object.
// o Output Test: Verify that customization options affect the clock display
// as expected.
const buttonContainer = document.querySelector('.buttons');
buttonContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('time_format-12')) {
        console.log(e.target.textContent);
    }
    console.log(clock.get12HourTime());
})

