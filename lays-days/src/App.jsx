import React from "react";
import Menu from "./components/menu/navbar";
import Content from "./components/content";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <Content />
      </div>
    );
  }
}
