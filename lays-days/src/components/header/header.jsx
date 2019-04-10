import React, { Fragment } from "react";
import header from "./header.module.css";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuMobileView: false
    };
  }

  render() {
    let menuBlock = (
      <div className={header.button_layout}>
        <div className={header.button}>
          <div className={header.button_icon_1} />
          <p className={header.button_text}>Галерея</p>
        </div>
        <div className={header.button}>
          <div className={header.button_icon_2} />
          <p className={header.button_text}>О проекте</p>
        </div>
        <div className={header.button}>
          <div className={header.button_icon_3} />
          <p className={header.button_text}>Лето с Lay's</p>
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
          openMenu = " " + header.opened;
        }
        menuBlock = (
          <Fragment>
            <div
              className={header.menu_button + openMenu}
              onClick={() => this.openMobileMenu()}
            >
              <div className={header.line1} />
              <div className={header.line2} />
              <div className={header.line3} />
              <div className={header.button_layout}>
                <div className={header.button + " slideToRight"}>
                  <div className={header.button_icon_1} />
                  <p className={header.button_text}>Галерея</p>
                </div>
                <div className={header.button + " slideToLeft"}>
                  <div className={header.button_icon_2} />
                  <p className={header.button_text}>О проекте</p>
                </div>
                <div className={header.button + " slideToRight"}>
                  <div className={header.button_icon_3} />
                  <p className={header.button_text}>Лето с Lay's</p>
                </div>
                <div className={header.button_close_menu + " slideToLeft"}>
                  <p
                    className={header.button_close_menu_text}
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
      <div className={header.navbar + hiddenMenu}>
        <div className={header.pointer_block}>
          <div className={header.logo_layout}>
            <div className={header.logo_icon} />
            <p className={header.logo_text}>#летосLays</p>
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
