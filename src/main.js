import Activity from './activity.js';
import "./styles.css";

class ActivityTimer {

    constructor() {
        this.activity = null;
        this.loggedActivites = null;
        this.$task = document.querySelector('.task-input');
        this.$min = document.querySelector('#minutes');
        this.$sec = document.querySelector('#seconds');
        this.$errTask = document.querySelector('.task-err');
        this.$minErr = document.querySelector('.min-err');
        this.$secErr = document.querySelector('.sec-err');
        this.currentCategory = '';
        this.$currentActivityDetails = document.querySelector('.current-activity');
        this.$completeActivity = document.querySelector('.complete-activity');
        this.$activityDetails = document.querySelector('.activity');
        this.$activityLog = document.querySelector('.activity-msg');
        this.$startActivity = document.querySelector('.btn');
        this.taskError = null;
        this.timeError = null;
        this.addEventListeners();
        if (this.loggedActivites.length > 0) {
             this.createCards();
        }
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
        if (target.classList?.contains('task-input') || target.getAttribute('id') === 'minutes' || target.getAttribute('id') === 'seconds') {
        let errorMsg = target.getAttribute('id') === 'minutes' ? this.$minErr : this.$secErr;
        if (target.classList.contains('task-input')) {
            this.taskError = false;
            let {value} = target;
            target.classList.remove('error');
            this.$errTask.innerText = '';
            if (value.length < 3) {
                target.classList.add('error');
                this.$errTask.innerText = `<span class="warning"></span><span>length of input should be more than 3 characters</span>`;
                this.taskError = true;
            }   
        }

        if (target.getAttribute('id') === 'minutes' || target.getAttribute('id') === 'seconds') {
            this.timeError = false;
            let {value} = target;
            target.classList.remove('error');
            errorMsg.innerText = '';
            if (!Number.isInteger(+value))  {
                errorMsg.innerText = `enter valid number`;
                target.classList.add('error');
                this.timeError = true;
            }   
            if ((target.getAttribute('id') === 'minutes' && +value===0)) {
                errorMsg.innerText = `enter number greater than 0`;
                target.classList.add('error');
                this.timeError = true;
            }
        }
        this.activateBtn();
    }
    }

    activateBtn() {
        if (!this.taskError && (this.timeError !== null && !this.timeError)) {
            this.$startActivity.classList.remove('btn-disabled');
        } else {
            this.$startActivity.classList.add('btn-disabled');
        }
    }

    addActivity(event) {
        let {target} = event;
        if (target.classList.contains('btn')) {
            event.preventDefault();
            this.getActivityData();
        }
    }

    getActivityData() {
        let task = this.$task.value;
        let minutes = this.$min.value ? this.formatTime(this.$min.value) : '00';
        let seconds =  this.$sec.value ? this.formatTime(this.$sec.value) : '00';
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
        const statusClass = `${this.currentCategory}-selected-color`;
        statusElm.innerHTML = `
            <p class="status">complete!</p>
        `;
        this.activity.markComplete();
        statusElm.insertAdjacentHTML('afterend', `<p class=${statusClass}>Congratulations 🥳</p><button class="btn btn-log">Log Activity</button>`)
    }

    logActivity(event) {
        let {target} = event;
        if (target.classList.contains('btn-log')) {
            this.loggedActivites = this.activity.getSavedActivitesFromStorage();
            this.loggedActivites.push(this.activity);
            this.activity.saveActivitesToStorage(this.loggedActivites);
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
        const completedActivity = this.$completeActivity.querySelector('.completed-activity');
        this.$completeActivity.querySelector('.new-activity')?.remove();
        completedActivity.insertAdjacentHTML('beforeend', `<p class="new-activity">⛷️</p>`);
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
        this.$startActivity.classList.add('btn-disabled');
        radioBtn.checked = false;
        this.currentCategory = '';
    }
}

new ActivityTimer();