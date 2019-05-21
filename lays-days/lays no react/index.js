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
buttonCloseMenu.addEventListener('click', () => closeMenu());

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
    section3.children[0].classList.add("slideToRight");
    section3.children[1].classList.add("slideToLeft");
  }
  if (scrollNew > section4.offsetTop) {
    section4.children[0].classList.add("slideToRight");
    section4.children[1].classList.add("slideToLeft");
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
  menuButton.children[0].classList.add(
    "header_pointer-block_menu-button_line1_active"
  );
  menuButton.children[1].classList.add(
    "header_pointer-block_menu-button_line2_active"
  );
  menuButton.children[2].classList.add(
    "header_pointer-block_menu-button_line3_active"
  );
  buttonBlock.children[0].classList.remove("close-menu_slideLeft");
  buttonBlock.children[0].classList.add("open-menu_slideLeft");
  buttonBlock.children[1].classList.remove("close-menu_slideRight");
  buttonBlock.children[1].classList.add("open-menu_slideRight");
  buttonBlock.children[2].classList.remove("close-menu_slideLeft");
  buttonBlock.children[2].classList.add("open-menu_slideLeft");
  buttonBlock.children[3].classList.remove("close-menu_slideRight");
  buttonBlock.children[3].classList.add("open-menu_slideRight");
  menuIsOpen = true;
  menuButtonIsPressed = true;
};

closeMenu = () => {
  if (menuButtonIsPressed) {
    menuButton.children[0].classList.remove(
      "header_pointer-block_menu-button_line1_active"
    );
    menuButton.children[1].classList.remove(
      "header_pointer-block_menu-button_line2_active"
    );
    menuButton.children[2].classList.remove(
      "header_pointer-block_menu-button_line3_active"
    );
    buttonBlock.children[0].classList.remove("open-menu_slideLeft");
    buttonBlock.children[0].classList.add("close-menu_slideLeft");
    buttonBlock.children[1].classList.remove("open-menu_slideRight");
    buttonBlock.children[1].classList.add("close-menu_slideRight");
    buttonBlock.children[2].classList.remove("open-menu_slideLeft");
    buttonBlock.children[2].classList.add("close-menu_slideLeft");
    buttonBlock.children[3].classList.remove("open-menu_slideRight");
    buttonBlock.children[3].classList.add("close-menu_slideRight");
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
