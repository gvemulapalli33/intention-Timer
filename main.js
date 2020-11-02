import Activity from './activity.js';

class ActivityTimer {

    static counter = 1;

    constructor() {
        this.activity = null;
        this.$task = document.querySelector('.task');
        this.$min = document.querySelector('.minutes');
        this.$sec = document.querySelector('.seconds');
        this.addEventListeners();
        this.currentCategory = '';
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
        let input = target.tagName === 'input' ||  target.closest('input');
        if (input.getAttribute('name') && input.getAttribute('name') === 'category') {
            let {checked, value} = input;
            let label = checked && input.closest('label');
            this.clearSelectedBorders();
            label.classList.add(`${value}-selected`);
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
        if (target.classList.contains('task')) {
            let errorMsg = document.querySelector('.task-err');
            let {value} = target;
            target.classList.remove('error');
            errorMsg.innerText = '';
            if (value.length < 5) {
                target.classList.add('error');
                errorMsg.innerText = `length of input should be more than 5 characters`;
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

    getActivityData() {
        let task = this.$task.value;
        let minutes = this.$min.value;
        let seconds = this.$sec.value;
        this.activity = new Activity(this.currentCategory, task, minutes, seconds, false, Activity.counter++)
    }

}

new ActivityTimer();