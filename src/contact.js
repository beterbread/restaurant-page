import cellphone from './images/cellphone.svg';
import marker from './images/map-marker-outline.svg';

const contact = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.classList.remove('menu-section', 'contact-section');
  main.classList.add('contact-section');

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const number = document.createElement('p');
  const address = document.createElement('p');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  img1.classList.add('cell');
  img2.classList.add('addy');
  img1.src = cellphone;
  img2.src = marker;
  number.textContent = '123-456-7890';
  address.textContent = '1625 Wilshire Blvd, Los Angeles, CA 90017'
  
  div1.appendChild(img1);
  div1.appendChild(number);
  div2.appendChild(img2);
  div2.appendChild(address);

  main.appendChild(div1);
  main.appendChild(div2);
  main.innerHTML += '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105787.98618412613!2d-118.3354553!3d34.0470885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7a3fb6600d1%3A0x87286f59a2dcf6a5!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1686858647908!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  
};

export { contact };