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
    this._isTwelveHours = false;
    this._period;

    this._padInput = (data) => data.toString().padStart(2, 0);

    this.setTimeMode = (isFalse = false) => this._isTwelveHours = isFalse;

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
        
        this._period = 'AM';
        return `${this._padInput(this.hours)}:${this._padInput(this.minutes)}:${this._padInput(this.seconds)} ${this._period}`;
    };

    this.updateTime = function (hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}

const clock = new Clock(hours, minutes, seconds);

const clockContainer = document.querySelector('.clock');

const display = function() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    clock.updateTime(hours, minutes, seconds);
    
    clock._isTwelveHours ? (clockContainer.textContent = clock.get12HourTime()) : (clockContainer.textContent = clock.getFormattedTime());

    // clockContainer.textContent = clock.getFormattedTime();
    // clockContainer.textContent = clock.getFormattedTime();
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
        clock.setTimeMode(true);
        return;
    }

    if (e.target.classList.contains('time_format-24')) {
        clock.setTimeMode(false);
        return;
    }
    
})

// time zone implementation
const res = (navigator.language)
console.log(res);

console.log(new Date().toLocaleString(res, {
    timeZone: 'America/New_York'
}))


