import milktea from './images/milktea.jpg';
import pork from './images/pork.jpg';

const menu = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.classList.remove('home-section', 'contact-section');
  main.classList.add('menu-section');

  const boba = document.createElement('div');
  boba.classList.add('boba');
  const text = document.createElement('h1');
  const boba1 = document.createElement('div');
  const image1 = document.createElement('img');
  const type1 = document.createElement('p');
  const boba2 = document.createElement('div');
  const image2 = document.createElement('img');
  const type2 = document.createElement('p');
  const boba3 = document.createElement('div');
  const image3 = document.createElement('img');
  const type3 = document.createElement('p');
  
  text.textContent = 'BOBA';
  type1.textContent = 'Milk tea';
  type2.textContent = 'Milk tea';
  type3.textContent = 'Milk tea';
  image1.src = milktea;
  image2.src = milktea;
  image3.src = milktea;
  boba1.append(image1);
  boba2.append(image2);
  boba3.append(image3);
  boba1.append(type1);
  boba2.append(type2);
  boba3.append(type3);
  
  boba.append(boba1);
  boba.append(boba2);
  boba.append(boba3);

  main.append(text);
  main.appendChild(boba);

  const noods = document.createElement('div');
  noods.classList.add('noodle');
  const ntext = document.createElement('h1');
  const nood1 = document.createElement('div');
  const nimage1 = document.createElement('img');
  const ntype1 = document.createElement('p');
  const nood2 = document.createElement('div');
  const nimage2 = document.createElement('img');
  const ntype2 = document.createElement('p');
  const nood3 = document.createElement('div');
  const nimage3 = document.createElement('img');
  const ntype3 = document.createElement('p');

  ntext.textContent = 'NOODLE';
  ntype1.textContent = 'Pork ramen';
  ntype2.textContent = 'Pork ramen';
  ntype3.textContent = 'Pork ramen';
  nimage1.classList.add('pork');
  nimage2.classList.add('pork');
  nimage3.classList.add('pork');
  nimage1.src = pork;
  nimage2.src = pork;
  nimage3.src = pork;
  nood1.append(nimage1);
  nood1.append(ntype1);
  nood2.append(nimage2);
  nood2.append(ntype2);
  nood3.append(nimage3);
  nood3.append(ntype3);
  
  noods.append(nood1);
  noods.append(nood2);
  noods.append(nood3);

  main.append(ntext);
  main.appendChild(noods);
};

export { menu };