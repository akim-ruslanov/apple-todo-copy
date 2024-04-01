// Represents a list of reminder items

class ReminderList {
    constructor(title, color) {
        this.title = title;
        this.color = color;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(idx) {
        this.items.splice(idx, 1);
    }

    get totalItems() {
        return this.items.length;
    }

    toString() {
        let msg = `${this.title}: \n`;
        this.items.forEach((item) => {
            msg += item.toString() + "\n";
        });
        return msg;
    }
}

export default ReminderList;