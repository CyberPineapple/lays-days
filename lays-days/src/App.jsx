import React from 'react';

export default class App extends React.Component {
  render() {
    return (
        <div className="app">
            <div className="header">
                <div className="menu">
                    <div className="menu-logo">
                        <div className="menu-logo-icon"></div>
                        <p className="menu-logo-text">#летосLays</p>
                    </div>
                    <div className="menu-button-layout">
                        <div className="menu-button">
                            <div className="menu-button-icon-1"></div>
                            <p className="menu-button-text">Галерея</p>
                        </div>
                        <div className="menu-button">
                            <div className="menu-button-icon-2"></div>
                            <p className="menu-button-text">О проекте</p>
                        </div>
                        <div className="menu-button">
                            <div className="menu-button-icon-3"></div>
                            <p className="menu-button-text">Лето с Lay's</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="content">
                
            </div>
      </div>
    );
  }
}