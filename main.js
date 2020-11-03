import Activity from './activity.js';

class ActivityTimer {

    static counter = 1;

    constructor() {
        this.activity = null;
        this.$task = document.querySelector('.task-input');
        this.$min = document.querySelector('.minutes');
        this.$sec = document.querySelector('.seconds');
        this.$errTask = document.querySelector('.task-err');
        this.addEventListeners();
        this.currentCategory = '';
        this.$currentActivityDetails = document.querySelector('.current-activity');
        this.$activityDetails = document.querySelector('.activity');
    }

    addEventListeners() {
      document.addEventListener('click', (event) => {
          this.changeActivityStyle(event);
          this.addActivity(event);
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
            let errorMsg = target.classList.contains('minutes') ?
            document.querySelector('.min-err') : document.querySelector('.sec-err')
            let {value} = target;
            target.classList.remove('error');
            errorMsg.innerText = '';
            if (!Number.isInteger(+value)) {
                errorMsg.innerText = `enter valid number`;
                target.classList.add('error');
            }   
        }
    }

    addActivity(event) {
        let {target} = event;
        if (target.classList.contains('btn')) {
            event.preventDefault();
            this.validateForm();
            this.getActivityData();
        }
    }

    validateForm() {
        let task = this.$task.value;
        let min = this.$min.value;
        let sec = this.$sec.value;
        if( !task || !min || !sec) {
            this.showError();
        }
    }

    showError() {
        this.$errTask.innerHTML = `<span class="error-txt"><span class="warning"></span> A description is required.</span>`;
    }

    getActivityData() {
        let task = this.$task.value;
        let minutes = this.formatTime(this.$min.value);
        let seconds = this.formatTime(this.$sec.value);
        this.activity = new Activity(this.currentCategory, task, minutes, seconds, false, Activity.counter++);
        this.startActivity();
    }

    formatTime(time) {
        console.log(time);
        if(+time < 10) {
            return "0" + time;
        } else {
            return time;
        }
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
        </section>    
       `;
    }

}

new ActivityTimer();