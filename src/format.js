import './style.css';

/* Format of the website */
const format = () => {
  const content = document.querySelector('#content');

  /* Header */
  const header = document.createElement('div');
  const title = document.createElement('div');
  const name = document.createElement('div');
  const gif = document.createElement('iframe');
  const tabs = document.createElement('div');
  const homeTab = document.createElement('div');
  const menuTab = document.createElement('div');
  const contactTab = document.createElement('div');

  //Div for name and gif
  gif.setAttribute('src', "https://giphy.com/embed/Vc9Y0FoHf5EurP3Qjs")
  gif.classList.add('gif');
  title.appendChild(name);
  title.appendChild(gif);

  name.textContent = 'Kitty Cafe'; 
  homeTab.textContent = 'HOME';
  menuTab.textContent = 'MENU';
  contactTab.textContent = 'CONTACT';
  homeTab.classList.add('tab', 'home');
  menuTab.classList.add('tab', 'menu');
  contactTab.classList.add('tab', 'contact');

  //Div for tabs
  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(contactTab);
  tabs.classList.add('tabs');

  header.appendChild(title);
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
  footer.textContent = '© 2023 Kitty Cafe Franchise Inc. All rights reserved.'

  content.appendChild(footer);
};

export { format };