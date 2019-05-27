const menuButton = document.querySelector("[data-js-id=menuButton]");
const menu = document.querySelector("[data-js-id=menu]");
const buttonCloseMenu = document.querySelector("[data-js-id=buttonCloseMenu]");
const buttonBlock = document.querySelector("[data-js-id=buttonBlock]");
const section3 = document.querySelector("[data-js-id=section3]");
const section4 = document.querySelector("[data-js-id=section4]");

let widthScreen = document.body.clientWidth;
let scrollOld = 0;
let menuIsOpen = false;
let menuButtonIsPressed = false;

window.addEventListener("resize", () => handleWidthScreen());
window.addEventListener("load", () => handleWindowLoad());
window.addEventListener("scroll", () => handleWindowScroll());
menuButton.addEventListener("click", () => handleMenu());
buttonCloseMenu.addEventListener("click", () => closeMenu());

handleWidthScreen = () => {
  widthScreen = document.body.clientWidth;
  if (widthScreen > 680) {
    menu.classList.remove("header_show");
    menu.classList.remove("header_hide");
  }
};

handleWindowLoad = () => {
  setTimeout(() => window.scrollTo(0, 0));
};

handleWindowScroll = () => {
  let scrollNew = window.pageYOffset + document.documentElement.clientHeight;
  if (scrollNew > section3.offsetTop) {
    section3.children[0].classList.add("section-3-description-block_animate");
    section3.children[1].classList.add("section-3-image-block_animate");
  }
  if (scrollNew > section4.offsetTop) {
    section4.children[0].classList.add("section-4-image-block_animate");
    section4.children[1].classList.add("section-4-description-block_animate");
  }
  if (scrollNew > scrollOld && widthScreen < 680) {
    menu.classList.remove("header_show");
    closeMenu();
    menu.classList.add("header_hide");
  } else if (scrollNew <= scrollOld && widthScreen < 680) {
    menu.classList.remove("header_hide");
    menu.classList.add("header_show");
  }
  scrollOld = scrollNew;
};

handleWidthScreen();

openMenu = () => {
  menuButton.children[0].classList.add("menu-button__line-1_active");
  menuButton.children[1].classList.add("menu-button__line-2_active");
  menuButton.children[2].classList.add("menu-button__line-3_active");
  buttonBlock.children[0].classList.remove("header-button_close-left");
  buttonBlock.children[0].classList.add("header-button_open-left");
  buttonBlock.children[1].classList.remove("header-button_close-right");
  buttonBlock.children[1].classList.add("header-button_open-right");
  buttonBlock.children[2].classList.remove("header-button_close-left");
  buttonBlock.children[2].classList.add("header-button_open-left");
  buttonBlock.children[3].classList.remove("header-button_close-right");
  buttonBlock.children[3].classList.add("header-button_open-right");
  menuIsOpen = true;
  menuButtonIsPressed = true;
};

closeMenu = () => {
  if (menuButtonIsPressed) {
    menuButton.children[0].classList.remove("menu-button__line-1_active");
    menuButton.children[1].classList.remove("menu-button__line-2_active");
    menuButton.children[2].classList.remove("menu-button__line-3_active");
    buttonBlock.children[0].classList.remove("header-button_open-left");
    buttonBlock.children[0].classList.add("header-button_close-left");
    buttonBlock.children[1].classList.remove("header-button_open-right");
    buttonBlock.children[1].classList.add("header-button_close-right");
    buttonBlock.children[2].classList.remove("header-button_open-left");
    buttonBlock.children[2].classList.add("header-button_close-left");
    buttonBlock.children[3].classList.remove("header-button_open-right");
    buttonBlock.children[3].classList.add("header-button_close-right");
    menuIsOpen = false;
  }
};

handleMenu = () => {
  if (menuIsOpen) {
    closeMenu();
  } else if (!menuIsOpen) {
    openMenu();
  }
};
