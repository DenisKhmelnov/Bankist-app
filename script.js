'use strict';

///////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScroll = document.querySelector('.btn--scroll-to');

// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Navigation with delegation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.classList;

  if (id.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    console.log(href);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabs
const tabs = document.querySelectorAll('.operations__tab');
document
  .querySelector('.operations__tab-container')
  .addEventListener('click', function (e) {
    //Finding the button clicked
    const tab = e.target.closest('.operations__tab');
    //Remove class from all buttons and add to chosen one
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    e.target.classList.add('operations__tab--active');
    //Removing active class from arcticle
    document
      .querySelectorAll('.operations__content')
      .forEach(a => a.classList.remove('operations__content--active'));
    //Adding active class to required article
    const articleNumber = tab.dataset.tab;
    document
      .querySelector(`.operations__content--${tab.dataset.tab}`)
      .classList.add('operations__content--active');
  });

// Navigation bars opasity
const nav = document.querySelector('.nav');
const items = nav.querySelectorAll('.nav__link');

const opacity = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const eventItem = e.target;
    items.forEach(i => {
      if (i !== eventItem) i.style.opacity = this;
    });
  }
};
nav.addEventListener('mouseover', opacity.bind(0.5));
nav.addEventListener('mouseout', opacity.bind(1));
