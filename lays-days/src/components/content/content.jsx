import React from "react";
import Footer from "../content/footer.jsx";
import MainPage from "./mainPage/mainPage.jsx";

export default class Content extends React.Component {
  render() {
    let contentStyles = "content";
    if (this.props.viewMenu === false) {
      contentStyles = "content scrollDown";
    }

    return (
      <div className={contentStyles}>
        <MainPage widthScreen={this.props.widthScreen} />
        <Footer widthScreen={this.props.widthScreen} />
      </div>
    );
  }
}
