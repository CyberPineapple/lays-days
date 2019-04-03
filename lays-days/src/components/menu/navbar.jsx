import React from "react";
import menu from "./menu.module.css";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      widthScreen: window.innerWidth
    };
  }

  componentDidMount(){
    window.addEventListener("resize", this.update);
  }

  update = () => {
    let width = document.documentElement.clientWidth;
    this.setState({
      widthScreen: width
    });
  };


  render() {
    console.log(this.state.widthScreen);
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
    if (this.state.widthScreen <= 680) {
      menuBlock = null;
    }

    return (
      <div className={menu.navbar}>
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
}
