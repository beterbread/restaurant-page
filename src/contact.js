const contact = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';

  const content = document.createElement('div');
  content.textContent = 'Contact test';

  main.appendChild(content);
};

export { contact };