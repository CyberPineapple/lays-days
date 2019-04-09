import React, { Fragment } from "react";
import menu from "./menu.module.css";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuMobileView: false
    };
  }

  render() {
    let menuBlock = (
      <div className={menu.button_layout}>
        <div className={menu.button}>
          <div className={menu.button_icon_1} />
          <p className={menu.button_text}>Галерея</p>
        </div>
        <div className={menu.button}>
          <div className={menu.button_icon_2} />
          <p className={menu.button_text}>О проекте</p>
        </div>
        <div className={menu.button}>
          <div className={menu.button_icon_3} />
          <p className={menu.button_text}>Лето с Lay's</p>
        </div>
      </div>
    );
    let hiddenMenu = "";
    let openMenu = "";
    if (this.props.widthScreen <= 680) {
      if (this.props.viewMenu === false) {
        hiddenMenu = " hidden";
        console.log("hidden");
        if (this.state.menuMobileView === true) {
          this.openMobileMenu();
        }
      } else {
        hiddenMenu = " view";
        console.log("visibility");
        if (this.state.menuMobileView === true) {
          openMenu = " " + menu.opened;
        }
        menuBlock = (
          <Fragment>
            <div
              className={menu.menu_button + openMenu}
              onClick={() => this.openMobileMenu()}
            >
              <div className={menu.line1} />
              <div className={menu.line2} />
              <div className={menu.line3} />
              <div className={menu.button_layout}>
                <div className={menu.button + " slideToRight"}>
                  <div className={menu.button_icon_1} />
                  <p className={menu.button_text}>Галерея</p>
                </div>
                <div className={menu.button + " slideToLeft"}>
                  <div className={menu.button_icon_2} />
                  <p className={menu.button_text}>О проекте</p>
                </div>
                <div className={menu.button + " slideToRight"}>
                  <div className={menu.button_icon_3} />
                  <p className={menu.button_text}>Лето с Lay's</p>
                </div>
                <div className={menu.button_close_menu + " slideToLeft"}>
                  <p
                    className={menu.button_close_menu_text}
                    onClick={() => this.openMobileMenu()}
                  >
                    Свернуть меню
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        );
      }
    }

    return (
      <div className={menu.navbar + hiddenMenu}>
        <div className={menu.pointer_block}>
          <div className={menu.logo_layout}>
            <div className={menu.logo_icon} />
            <p className={menu.logo_text}>#летосLays</p>
          </div>
          {menuBlock}
        </div>
      </div>
    );
  }

  openMobileMenu = () => {
    this.setState({
      menuMobileView: !this.state.menuMobileView
    });
  };
}
