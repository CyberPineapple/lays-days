import React from 'react';
import WOW from 'wowjs';

export default class Content extends React.Component{

    componentDidMount(){
        new WOW.WOW().init();
    }

    render() {
        let images = [
            <div style={{"background-image": "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/1.dc59205a.png)", "background-size": "cover"}}></div>,
            <div style={{"background-image": "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/2.09d5f843.png)", "background-size": "cover"}}></div>,
            <div style={{"background-image": "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/3.416330f5.png)", "background-size": "cover"}}></div>,
            <div style={{"background-image": "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/4.71d17a4f.png)", "background-size": "cover"}}></div>,
            <div style={{"background-image": "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/5.d0f1531e.png)", "background-size": "cover"}}></div>,
            <div style={{"background-image": "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/6.d542dd6f.png)", "background-size": "cover"}}></div>,
            <div style={{"background-image": "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/7.7c6c40b0.png)", "background-size": "cover"}}></div>,
            <div style={{"background-image": "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/8.0a2ab336.png)", "background-size": "cover"}}></div>,
            <div style={{"background-image": "url(https://pepsico-lays-yellow-trend.snpdev.ru/images/stub/9.4c9c4447.png)", "background-size": "cover"}}></div>,
        ]

        let screenWidth = document.body.clientWidth;
            let animationSlideLeft = '';
            let animationSlideRight = '';
        if (screenWidth > 640){
            animationSlideLeft = 'fadeInLeft';
            animationSlideRight = 'fadeInRight';
        } 
        return (
            <div className="content">
                <div className={"content-section-1 wow "+animationSlideRight} >
                    <div className="item-section-1">
                        <div className="icon wow zoomIn"></div>
                        <p className="text wow fadeIn">Загружай фото</p>
                        <p className="text wow fadeIn">с хэштегом</p>
                        <p className="text hashtag wow fadeIn">#летосLays</p>
                    </div>
                    <div className="item-section-2">
                        <div className="icon wow zoomIn"></div>
                        <p className="text wow fadeIn">Собирай</p>
                        <p className="text wow fadeIn">лайки</p>
                    </div>
                    <div className="item-section-3">
                        <div className="icon wow zoomIn"></div>
                        <p className="text wow fadeIn">Выигрывай</p>
                        <p className="text wow fadeIn">призы</p>
                    </div>
                    <div className="text-block">
                        <h1 className="text">ЛЕТО</h1>
                        <p className="text">вкуснее</p>
                        <p className="text">c <span>Lay's</span></p>
                    </div>
                </div>
                <div className={"content-section-2 wow "+animationSlideLeft}>
                    <div className="content-section-2-1">
                        <div className="image"></div>
                        <div className="text">
                            <p>Загружай</p>
                            <p>фото</p>
                            <p>с хэштегом</p>
                            <p className="hashtag">#летосLays</p>
                        </div>
                        <div className="button">галерея</div>
                    </div>
                    <div className="content-section-2-2">
                        {images}
                    </div>
                </div>
                <div className="content-section-3">
                    <div className={"content-section-3-1 wow "+animationSlideLeft}></div>
                    <div className={"content-section-3-2 wow "+animationSlideRight}></div>
                </div>
                <div className="content-section-4">
                    <div className={"content-section-4-1 wow "+animationSlideLeft}></div>
                    <div className={"content-section-4-2 wow "+animationSlideRight}></div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}