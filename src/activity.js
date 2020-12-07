class Activity {

    constructor(category, description, minutes, seconds, completed, id) {
        this.category = category;
        this.description = description;
        this.minutes = minutes;
        this.seconds = seconds;
        this.completed = completed;
        this.id = id;
    }

    countDown() {}
    markComplete() {
        this.complete = true;
    }
    saveToStorage() {
        localStorage.setItem('activity', '');
    }
}

export default Activity;