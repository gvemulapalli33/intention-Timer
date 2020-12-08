class Activity {

    static counter = 0;
    
    constructor(category, description, minutes, seconds, completed, id) {
        this.category = category;
        this.description = description;
        this.minutes = minutes;
        this.seconds = seconds;
        this.completed = completed;
        this.id = id;
    }

    markComplete() {
        this.complete = true;
    }

    saveActivitesToStorage(activities) {
        localStorage.setItem('activities', JSON.stringify(activities));
    }

    getSavedActivitesFromStorage() {
        return JSON.parse(localStorage.getItem('activities')) || [];
    }
}

export default Activity;