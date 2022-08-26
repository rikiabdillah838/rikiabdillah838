// SISEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
// Penggunaan '#' untuk menandai 'id' nya
const messagesNotivications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#messages-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

// ================= SIDEBAR ====================

// remove active class from all menu item
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove('active');
  });
};

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    console.log('');
    if (item.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none';
    } else {
      document.querySelector('.notifications-popup').style.display = 'block';
      document.querySelector('#notifications .notifications-count').style.display = 'none';
    }
  });
});

// ================ MESSAGES ================

// searches chats
const searchMessages = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = 'flex';
    } else {
      user.style.display = 'none';
    }
  });
};

// seach chat
messageSearch.addEventListener('keyup', searchMessages);

// highlight messages card when messages menu item is clicked
messagesNotivications.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesNotivications.querySelector('.notifications-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
});
console.log();

// THEME/DISPLAY CUSTOMIZATION

// opens modal

const openThemeModal = () => {
  themeModal.style.display = 'grid';
};

//close modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
};

// close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// ======================== FONT =======================
fontSize.forEach((size) => {
  let fontSize;

  if (size.classList.contains('font-size-1')) {
    fontSize = '10px';
    root.style.setProperty('----sticky-top-left', '5.4rem');
    root.style.setProperty('----sticky-top-left', '5.4rem');
  } else if (size.classList.contains('font-size-2')) {
    fontSize = '13px';
    root.style.setProperty('----sticky-top-left', '5.4rem');
    root.style.setProperty('----sticky-top-left', '-7rem');
  } else if (size.classList.contains('font-size-3')) {
    fontSize = '16px';
    root.style.setProperty('----sticky-top-left', '-2rem');
    root.style.setProperty('----sticky-top-left', '-17rem');
  } else if (size.classList.contains('font-size-4')) {
    fontSize = '19px';
    root.style.setProperty('----sticky-top-left', '-5rem');
    root.style.setProperty('----sticky-top-left', '-25rem');
  } else if (size.classList.contains('font-size-5')) {
    fontSize = '22px';
    root.style.setProperty('----sticky-top-left', '-10rem');
    root.style.setProperty('----sticky-top-left', '-33rem');
  }

  // change font size of the root html element
  document.querySelector('html').style.fontSize = fontSize;
});
console.log();
