import Activity from './activity.js';
import "./styles.css";

class ActivityTimer {

    static counter = 1;

    constructor() {
        this.activity = null;
        this.loggedActivites = JSON.parse(localStorage.getItem('activities')) || [];
        this.$task = document.querySelector('.task-input');
        this.$min = document.querySelector('.minutes');
        this.$sec = document.querySelector('.seconds');
        this.$errTask = document.querySelector('.task-err');
        this.$minErr = document.querySelector('.min-err');
        this.$secErr = document.querySelector('.sec-err');
        this.currentCategory = '';
        this.$currentActivityDetails = document.querySelector('.current-activity');
        this.$completeActivity = document.querySelector('.complete-activity');
        this.$activityDetails = document.querySelector('.activity');
        this.$activityLog = document.querySelector('.activity-msg');
        this.$startActivity = document.querySelector('.btn');

        this.addEventListeners();
        this.createCards();

    }

    addEventListeners() {
      document.addEventListener('click', (event) => {
          this.changeActivityStyle(event);
          this.addActivity(event);
          this.timer(event);
          this.logActivity(event);
          this.createActivity(event);
      });

      document.addEventListener('input', (event) => {
          this.validateInput(event);
      });
    }

    changeActivityStyle(event) {
        let {target} = event;
        let input =  target.tagName === 'input' ||  target.closest('input');
        if (input && input.getAttribute('name') && input.getAttribute('name') === 'category') {
            let {checked, value} = input;
            let label = checked && input.closest('label');
            this.clearSelectedBorders();
            label.classList.add(`${value}-selected`);
            this.currentCategory = value;
        }
    }

    clearSelectedBorders() {
       let classValues = ['study-selected', 'meditate-selected', 'exercise-selected'];
       let labelElms = document.querySelectorAll('label');
       labelElms.forEach((label) => {
            let names = label.className.split(' ');
            names = names.filter((name) => !classValues.includes(name));
            label.className = names.join(' ');
       });
    }

    validateInput(event) {
        let {target} = event;
        let errorMsg = target.classList.contains('minutes') ? this.$minErr : this.$secErr;
        if (target.classList.contains('task-input')) {
            let {value} = target;
            target.classList.remove('error');
            this.$errTask.innerText = '';
            if (value.length < 5) {
                target.classList.add('error');
                this.$errTask.innerText = `length of input should be more than 5 characters`;
            }   
        }

        if (target.classList.contains('minutes') || target.classList.contains('seconds')) {
            let {value} = target;
            target.classList.remove('error');
            errorMsg.innerText = '';
            if (!Number.isInteger(+value)) {
                errorMsg.innerText = `enter valid number`;
                target.classList.add('error');
            }   
        }

        if (!this.$errTask.innerText || !errorMsg.innerText) {
            this.validateForm();
        }
    }

    addActivity(event) {
        let {target} = event;
        if (target.classList.contains('btn')) {
            event.preventDefault();
            this.getActivityData();
        }
    }

    validateForm() {
        if (!this.$minErr.innerText || !this.$secErr.innerText || !this.$errTask.innerText) {
            this.showError();
        } else {
            this.$startActivity.classList.remove('btn-disabled');
        }
    }

    showError() {
        this.$startActivity.classList.add('btn-disabled');
        this.$errTask.innerHTML = `<span class="error-txt"><span class="warning"></span> A valid description is required.</span>`;
    }

    getActivityData() {
        let task = this.$task.value;
        let minutes = this.formatTime(this.$min.value);
        let seconds = this.formatTime(this.$sec.value);
        this.activity = new Activity(this.currentCategory, task, minutes, seconds, false, Activity.counter++);
        this.startActivity();
    }

    formatTime(time) {
        if (+time < 10) {
            return "0" + time;
        } else {
            return time;
        }
    }

    timer(event) {
        let {target} = event;
        if (!target.disabled && target.classList.contains('status')) {
            target.disabled = true;
            target.classList.add('disabled-color');
            this.startTimer(+this.activity.minutes, +this.activity.seconds);
        }
    }

    startTimer(minutes, seconds) {
        let totalTime = minutes * 60 + seconds;
        const timer = () => {
            totalTime--;
            if (totalTime <= 0) {
                clearInterval(timerId);
                this.showCompleteMessage();
            }
            let minutes = this.formatTime(Math.floor(totalTime/60));
            let seconds = this.formatTime(Math.floor(totalTime%60));
            let [$min, $sec] = document.querySelectorAll('.timer');
            $min.innerText = minutes;
            $sec.innerText = seconds;
        }
        let timerId = setInterval(timer, 1000);
    }

    startActivity() {
       this.$activityDetails.hidden = true;
       this.$currentActivityDetails.hidden = false;
       let className = `bg-category ${this.currentCategory}-selected`;
       this.$currentActivityDetails.innerHTML = `
       <h2 class="sub-title">Current Activity</h2>
       <section class="activity-details">
            <h3>${this.activity.description}</h3>
            <h1 class="clock">
                <span class="timer">${this.activity.minutes}</span>
                <span class="seperator">:</span>
                <span class="timer">${this.activity.seconds}</span>
            </h1>
            <article class="${className}">
                <p class="status">start</p>
            </article>
        </section>`;
    }

    showCompleteMessage() {
        let statusElm = document.querySelector('.bg-category');
        statusElm.innerHTML = `
            <p class="status">complete!</p>
        `;
        statusElm.insertAdjacentHTML('afterend', `<p>Congratulations 🥳</p> <button class="btn btn-log">Log Activity</button>`)
    }

    logActivity(event) {
        let {target} = event;
        if (target.classList.contains('btn-log')) {
            this.loggedActivites.push(this.activity);
            localStorage.setItem('activities', JSON.stringify(this.loggedActivites));
            this.createCards();
            this.completeActivity();
        }
    }

    createCards() {
        this.$activityLog.innerHTML = '';
        let cards = this.loggedActivites.map(({category, minutes, seconds, description}) => {
            let className = `card-${category}`;
            return `
                <section class="card">
                    <div class="${className}">
                        <h3 class="card-title">${category}</h3>
                        <p class="card-time">${minutes} MIN ${seconds} SECONDS</p>
                    </div>
                    <p class="card-desc">${description}</p>             
                </section>
            `
        }).join('');
        this.$activityLog.innerHTML = cards;
    }

    completeActivity() {
        this.$currentActivityDetails.hidden = true;
        this.$completeActivity.hidden = false;
    }

    createActivity(event) {
        let {target} = event;
        if (target.classList.contains('btn-create')) {
            this.cleanUp();
        }
    }

    cleanUp() {
        this.$currentActivityDetails.hidden = true;
        this.$completeActivity.hidden = true;
        this.$activityDetails.hidden = false;
        this.activity = null;
        this.$task.value = '';
        this.$min.value = ''; 
        this.$sec.value = ''; 
        this.$errTask.innerText = '';
        let selectedCategory = document.querySelector(`.${this.currentCategory}-selected`);
        selectedCategory.classList.remove(`${this.currentCategory}-selected`);
        let radioBtn = selectedCategory.querySelector('input[type=radio]:checked');
        radioBtn.checked = false;
        this.currentCategory = '';
    }
}

new ActivityTimer();