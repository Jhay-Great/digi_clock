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
    this.alarmTimes = [];
    // this.alarmTimes = {}

    this._padInput = (data) => data.toString().padStart(2, 0);

    this.setTimeMode = (is12Hours = false) => this._isTwelveHours = is12Hours;

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

    // =======================ALARM FUNCTIONALITY=======================
    // setting alarm
    this.setAlarm = function (setTime) {
        if (typeof setTime !== 'string' || !setTime) return;

        const now = new Date();
        const selectedDate = new Date(setTime);
    
        if (selectedDate <= now) return 'Cannot select a previous or current time';
    
        if (alarmTimes.includes(selectedDate)) return 'alarm set time already exists';
    
        const countDown = selectedDate - now;
        console.log(countDown);
    
        this.alarmTimes.push(countDown);
        // console.log('alarm set successfully')
    };
    // getting alarm
    this._getAlarm = function () {
        return this.alarmTimes;
    };
    // play alarm
    this._soundAlarm = function (element, position, container) {
        this._getAlarm().forEach(alarm => {
            console.log(alarm);
            setTimeout(() => {
                console.log('Playing alarm...');
                this.renderHTML(element, position, container);
                // console.log(isAlarmTimerReady);
                isAlarmTimerReady = true;
            }, alarm);
        });
    };

    this.displayAlarmPopup = function(element, position, container) {
        // let isAlarmTimerReady = false;

        this._soundAlarm(element, position, container);
        // isAlarmTimerReady && this.renderHTML(element, position, container);
    };

    this.renderHTML = function(element, position, container) {
        container.insertAdjacentHTML(position, element);
    };

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
const buttonContainer = document.querySelector('.time_format_container ');
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


// setting alarm listeners
const alarmTime = document.querySelector('.alarm-clock');
const setAlarmButton = document.querySelector('.accept-alarm');
const alarmButton = document.querySelector('.alarm-btn');
setAlarmButton.addEventListener('click', function(e) {

    const time = alarmTime.value;
    const html = 
    `
    <section class="alarm_popup">
        <img class="alarm-on" src="./assets/alarm.svg" alt="alarm clock svg logo">
        <p>Timer is ready, kindly perform your activity</p>
        <button class="alarm-btn">Ok</button>
    </section>
    `;
    
    const body = document.querySelector('body');
    
    // document.querySelector('body').insertAdjacentHTML('afterbegin', html);
    
    
    // OBJECT METHODS
    clock.setAlarm(time);
    clock.displayAlarmPopup(html, 'afterbegin', body);


})

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('alarm-btn')) return;
    console.log('clicked');
    document.querySelector('.alarm_popup').remove();
})




// time zone implementation
const res = (navigator.language)
console.log(res);

console.log(new Date().toLocaleString(res, {
    timeZone: 'America/New_York'
}))

const date2 = new Intl.DateTimeFormat(navigator.language);
console.log(date2)


// alarm functionality
const alarmTimes = [];
const setAlarm = function (setTime) {
    if (typeof setTime !== 'string' || !setTime) return;

    const now = new Date();
    const selectedDate = new Date(setTime);

    if (selectedDate <= now) return 'Cannot select a previous or current time';

    if (alarmTimes.includes(selectedDate)) return 'alarm set time already exists';

    // console.log(setTime);

    const countDown = selectedDate - now;

    alarmTimes.push(countDown);
    // console.log('alarm set successfully')
}
const getAlarm = function () {
    return alarmTimes;
}
const soundAlarm = function () {
    getAlarm().forEach(alarm => {
        console.log(alarm);
        setTimeout(() => {
            console.log('Playing alarm...');
        }, alarm);
        
    });
    console.log('alarm is yet to play')
    
    // const now = new Date();
    // let selectedDate = new Date(alarmTime.value);
    
    // if (selectedDate <= now) {
    //     return 'Cannot select a previous or current time';
    // }

    // if (alarmTimes.includes(selectedDate)) {
    //     return 'alarm set time already exists';
    // }
    
    // const countDown = selectedDate - now;

    // setTimeout(() => {
    //     alert('playing alarm....')
    // }, countDown);
    
}


