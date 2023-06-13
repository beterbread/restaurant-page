const menu = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';

  const content = document.createElement('div');
  content.textContent = 'Menu test';

  main.appendChild(content);
};

export { menu };