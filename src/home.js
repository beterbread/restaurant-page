import { menu } from './menu.js';

const home = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';

  const welcome = document.createElement('div');
  const image = document.createElement('img');
  const section = document.createElement('div');
  const about = document.createElement('h1');
  const descr = document.createElement('p');
  const btn = document.createElement('button');
  image.setAttribute('src', '/home/beterbread/repos/restaurant-page/src/images/ramen.jpg')
  section.classList.add('section');
  about.textContent = 'ABOUT US';
  descr.textContent = 'We are a feline-themed cafe located in the heart of California, where noodles and boba meet in purrfection. Join us for a delightful fusion of flavors.'
  btn.textContent = 'EXPLORE FLAVORS';
  btn.addEventListener('click', () => {
    menu();
  });
  section.appendChild(about);
  section.appendChild(descr);
  section.appendChild(btn);
  welcome.appendChild(image);
  welcome.appendChild(section);
  
  const hours = document.createElement('div');
  const header = document.createElement('h1');
  const text1 = document.createElement('p');
  const text2 = document.createElement('p');
  const text3 = document.createElement('p');
  const text4 = document.createElement('p');
  const text5 = document.createElement('p');
  const text6 = document.createElement('p');
  const text7 = document.createElement('p');
  header.textContent = 'Hours'
  text1.textContent = 'Sunday 12-10pm'
  text2.textContent = 'Monday 12-10pm'
  text3.textContent = 'Tuesday 12-10pm'
  text4.textContent = 'Wednesday 12-10pm'
  text5.textContent = 'Thursday 12-10pm'
  text6.textContent = 'Friday 12-10pm'
  text7.textContent = 'Saturday 12-10pm'
  hours.appendChild(header);
  hours.appendChild(text1);
  hours.appendChild(text2);
  hours.appendChild(text3);
  hours.appendChild(text4);
  hours.appendChild(text5);
  hours.appendChild(text6);
  hours.appendChild(text7);

  main.appendChild(welcome);
  main.appendChild(hours);
};

export { home };