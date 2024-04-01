import {v4 as uuidv4} from 'uuid';

// Represents an item to be added to reminder list


class ReminderItem {
    constructor(title, date, tag, isFlagged) {
        this.title = title;
        this.date = date;
        this.tag = tag;
        this.isFlagged = isFlagged;
        this.complete = false;
        this.id = uuidv4();
    }

    complete() {
        this.complete = true;
    }

    toString() {
        return `${this.title} tags: ${this.tag} due: ${this.date} flagged: ${this.isFlagged}`;
    }
}

export default ReminderItem;