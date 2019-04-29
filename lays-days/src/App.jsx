import React from "react";
import WOW from "wowjs";
import Header from "./components/header/header.jsx";
import Content from "./components/content/content";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      widthScreen: window.innerWidth,
    };
  }

  componentDidMount() {
    new WOW.WOW().init();
    window.addEventListener("resize", this.update);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.update);
  }



  update = () => {
    let width = document.documentElement.clientWidth;
    this.setState({
      widthScreen: width
    });
  };

  render() {
    return (
      <div className="app">
        <Header
          widthScreen={this.state.widthScreen}
        />
        <Content
          widthScreen={this.state.widthScreen}
        />
      </div>
    );
  }
}
