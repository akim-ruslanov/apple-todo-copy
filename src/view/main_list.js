function main_list(reminderList) {
    const container = document.createElement('div');
    container.className = "main-list";

    const listTitleContainer = title(reminderList);
    const itemsList = items(reminderList);


    container.append(listTitleContainer, itemsList);
    return container;
}

function title(reminderList) {
    const listTitleContainer = document.createElement('div');
    listTitleContainer.className = "main-list-title";
    const listTitle = document.createElement('p');
    listTitle.textContent = reminderList.title;
    const totalItems = document.createElement('p');
    totalItems.textContent = reminderList.totalItems;
    listTitleContainer.append(listTitle, totalItems);
    listTitleContainer.style.color = reminderList.color;
    return listTitleContainer;
}

function items(reminderList) {
    const itemsList = document.createElement('div');
    itemsList.className = "items-list";
    reminderList.items.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.className = "item-list"
        const checkBoxContainer = document.createElement('div');
        checkBoxContainer.className = "checkbox-container";
        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.id = `checkbox-${item.id}`;
        const label = document.createElement('label');
        label.htmlFor = `checkbox-${item.id}`;
        checkBoxContainer.append(checkBox, label);

        const itemText = document.createElement('p');
        itemText.textContent = item.title;
        itemContainer.append(checkBoxContainer, itemText);
        // itemContainer.textContent = item.toString();

        itemsList.append(itemContainer);
    });

    return itemsList;
}

export default main_list;