import React, { Fragment } from "react";
import header from "./header.module.css";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
      scroll: 0,
      viewMenu: true
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
    let statusMenu = "";
    let openMenu = "";
    if (this.props.widthScreen <= 680) {
      if (this.state.viewMenu === false) {
        statusMenu = " hide";
        console.log("hidden");
        if (this.state.openMenu === true) {
          this.openMobileMenu();
        }
      } else {
        if (this.state.scroll > 0){
          statusMenu = " show";
          console.log("visibility");
        }
        if (this.state.openMenu === true) {
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
      <div className={header.navbar + statusMenu}>
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

  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
  }

  scroll = () => {
    if (this.props.widthScreen <= 680) {
      let scrollNew = window.pageYOffset;
      let scrollOld = this.state.scroll;
      console.log("scrollNew: ", scrollNew, " | scrollOld: ", scrollOld);
      if (scrollOld <= scrollNew) {
        this.setState({
          viewMenu: false,
          scroll: scrollNew
        });
      } else {
        this.setState({
          viewMenu: true,
          scroll: scrollNew
        });
      }
    }
  };

  openMobileMenu = () => {
    this.setState({
      openMenu: !this.state.openMenu
    });
  };
}
