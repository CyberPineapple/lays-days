import React from 'react';

export default class App extends React.Component {
  render() {
    return (
        <div className="app">
            <div className="navbar">
                <div className="menu">
                    <div className="menu-logo">
                        <div className="menu-logo-icon"></div>
                        <p className="menu-logo-text">#летосLays</p>
                    </div>
                    <div className="menu-button-layout">
                        <div className="menu-button">
                            <div className="icon-1"></div>
                            <p className="menu-button-text">Галерея</p>
                        </div>
                        <div className="menu-button">
                            <div className="icon-2"></div>
                            <p className="menu-button-text">О проекте</p>
                        </div>
                        <div className="menu-button">
                            <div className="icon-3"></div>
                            <p className="menu-button-text">Лето с Lay's</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="content">
                <div className="animation-left">
                    <div className="content-section-1"></div>
                </div>
                <div className="content-section-2">
                    <div className="1"></div>
                    <div className="2"></div>
                </div>
            </div>
      </div>
    );
  }
}