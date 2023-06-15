const contact = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.classList.remove('menu-section', 'contact-section');
  main.classList.add('contact-section');

  const number = document.createElement('p');
  const address = document.createElement('p');
  const map = document.createElement('iframe');
  number.textContent = 'Number 123-456-7890'
  address.textContent = 'Address 123 Kitty Lane, Los Angeles, CA 90007'
  map.setAttribute('src', 'https://goo.gl/maps/LkcTg9Mbj4BP2ypC7');
  map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  map.classList.add('.map');
  main.appendChild(number);
  main.appendChild(address);
  main.append(map);
};

export { contact };