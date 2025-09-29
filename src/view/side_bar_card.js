function sideBarCard(key, data) {
  const container = document.createElement('div');
  container.className = 'card';

  const iconNameContainer = document.createElement('div');
  iconNameContainer.className = 'icon-name-container';

  const iconContainer = document.createElement('div');
  iconContainer.className = 'card-svg-container';
  iconContainer.innerHTML = data.icon;
  iconContainer.style.backgroundColor = data.color;

  const cardTitle = document.createElement('div');
  cardTitle.textContent = key;

  iconNameContainer.append(iconContainer, cardTitle);

  const cardCountContainer = document.createElement('div');
  cardCountContainer.className = 'card-count-container';
  cardCountContainer.textContent = '0';

  container.append(iconNameContainer, cardCountContainer);
  return container;
}

export default sideBarCard;
