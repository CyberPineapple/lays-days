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
                    <div className="content-section-2-1"></div>
                    <div className="content-section-2-2">
                        <div style="background-image: url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/1.dc59205a.png);" className="content-section-2-images"></div>
                        <div style="background-image: url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/2.09d5f843.png);" className="content-section-2-images"></div>
                        <div style="background-image: url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/3.416330f5.png);" className="content-section-2-images"></div>
                        <div style="background-image: url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/4.71d17a4f.png);" className="content-section-2-images"></div>
                        <div style="background-image: url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/5.d0f1531e.png);" className="content-section-2-images"></div>
                        <div style="background-image: url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/6.d542dd6f.png);" className="content-section-2-images"></div>
                        <div style="background-image: url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/7.7c6c40b0.png);" className="content-section-2-images"></div>
                        <div style="background-image: url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/8.0a2ab336.png);" className="content-section-2-images"></div>
                        <div style="background-image: url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/9.4c9c4447.png);" className="content-section-2-images"></div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}