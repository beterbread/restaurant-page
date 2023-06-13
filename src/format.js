import './style.css';

/* Format of the website */
const format = () => {
  const content = document.querySelector('#content');

  /* Header */
  const header = document.createElement('div');
  const name = document.createElement('div');
  const tabs = document.createElement('div');
  const homeTab = document.createElement('div');
  const menuTab = document.createElement('div');
  const contactTab = document.createElement('div');
  
  name.textContent = 'Mock name'; // CHANGE NAME
  homeTab.textContent = 'Home';
  menuTab.textContent = 'Menu';
  contactTab.textContent = 'Contact';
  homeTab.classList.add('tab', 'home');
  menuTab.classList.add('tab', 'menu');
  contactTab.classList.add('tab', 'contact');
  
  // Container for tabs
  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(contactTab);
  tabs.classList.add('tabs');
  
  header.appendChild(name);
  header.appendChild(tabs);
  header.classList.add('header');

  content.appendChild(header);   

  /* Main content */
  const main = document.createElement('div');
  main.classList.add('main');

  content.appendChild(main);

  /* Footer */
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  content.appendChild(footer);
};

export { format };