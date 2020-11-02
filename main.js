import Activity from './activity.js';

class ActivityTimer {

    static counter = 1;

    constructor() {
        this.activity = null;
        this.$task = document.querySelector('.task');
        this.$min = document.querySelector('.minutes');
        this.$sec = document.querySelector('.seconds');
       // this.$studyImg = document.querySelector('[data-type="study"] .category-img');
       // this.$meditateImg = document.querySelector('[data-type="meditate"] .category-img');
        //this.$exerciseImg = document.querySelector('[data-type="exercise"] .category-img');
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
        let containerValues = ['study-container', 'meditate-container', 'exercise-container'];
        if(target.closest('div')) {
        let containerValue = target.closest('div').className.split(' ');
        let [container] = containerValues.filter((value) => containerValue.includes(value));
        let parentContainer = document.querySelector(`.${container}`);
        let name = container.split('-')[0];
        let articleElm = parentContainer.querySelector(`.${name}`);
        this.currentCategory = name;
        let className = `${name}-selected`;
        parentContainer.classList.add(className);
        let imgElm = articleElm.querySelector('img');
        let imgName = `${name}-active.svg`;
        imgElm.setAttribute('src', `./assets/${imgName}`);
        let msgElm = articleElm.querySelector('p');
        msgElm.classList.add(`${name}-selected-color`);
        }
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