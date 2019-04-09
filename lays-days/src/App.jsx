import React from "react";
import WOW from "wowjs";
import Menu from "./components/menu/navbar";
import Content from "./components/content";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      widthScreen: window.innerWidth,
      scroll: 0,
      viewMenu: true
    };
  }

  componentDidMount() {
    new WOW.WOW().init();
    window.addEventListener("resize", this.update);
    window.addEventListener("scroll", this.scroll);
  }

  scroll = () => {
    if (this.state.widthScreen <= 680) {
      let scrollNew = window.pageYOffset;
      let scrollOld = this.state.scroll;
      console.log("scrollNew: ", scrollNew, " | scrollOld: ", scrollOld);
      if (scrollNew > 30 && scrollOld <= scrollNew){
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

  update = () => {
    let width = document.documentElement.clientWidth;
    this.setState({
      widthScreen: width
    });
  };

  render() {
    console.log("width: ", this.state.widthScreen);
    return (
      <div className="app">
        <Menu widthScreen={this.state.widthScreen} viewMenu={this.state.viewMenu} />
        <Content viewMenu={this.state.viewMenu} widthScreen={this.state.widthScreen} />
      </div>
    );
  }
}
