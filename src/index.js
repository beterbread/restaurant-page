import { format } from './format.js';
import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

format();
home();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

homeBtn.addEventListener('click', () => {
  home();
});

menuBtn.addEventListener('click', () => {
  menu();
});

contactBtn.addEventListener('click', () => {
  contact();
});