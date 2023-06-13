const home = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';

  const content = document.createElement('div');
  content.textContent = 'Home test';

  main.appendChild(content);
};

export { home };