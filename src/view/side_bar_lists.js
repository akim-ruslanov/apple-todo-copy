/* eslint-disable camelcase */
const list_svg = '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>';

function sideBarLists(lists) {
  const container = document.createElement('div');
  container.className = 'lists-container';
  const section_title = document.createElement('div');
  section_title.textContent = 'My Lists';

  const lists_container = document.createElement('div');
  lists_container.className = 'lists';

  lists.forEach((reminder_list) => {
    const reminder_list_container = document.createElement('div');
    reminder_list_container.className = 'list';

    const title_container = document.createElement('div');
    title_container.className = 'list-title-container';
    const icon_container = document.createElement('div');
    icon_container.className = 'list-svg-container';
    icon_container.innerHTML = list_svg;
    const reminder_list_title = document.createElement('div');
    reminder_list_title.textContent = reminder_list.title;
    title_container.append(icon_container, reminder_list_title);

    const reminder_list_length = document.createElement('div');
    reminder_list_length.textContent = reminder_list.totalItems;
    reminder_list_length.className = 'list-length';

    reminder_list_container.append(title_container, reminder_list_length);
    lists_container.append(reminder_list_container);
  });

  container.append(section_title, lists_container);

  return container;
}

export default sideBarLists;
