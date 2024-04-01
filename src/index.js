import ReminderItem from "./data/reminder_item";
import ReminderList from "./data/reminder_list";
import main_list from "./view/main_list";
import search_box from "./view/side_bar_search";
import cards from "./view/side_bar_cards";
import lists from "./view/side_bar_lists";
import './style.css';

let myLists = [];

const item = new ReminderItem("Do recycling", new Date('December 17, 20224'), null, false);

const reminderList = new ReminderList("TODO", "rgb(59, 130, 247)");

myLists.push(reminderList);

reminderList.addItem(item);

console.log(reminderList.toString());

const mainContainer = document.getElementById('main');
mainContainer.append(main_list(reminderList));

const side_bar = document.getElementById('sidebar');

side_bar.append(search_box(), cards(), lists(myLists));
