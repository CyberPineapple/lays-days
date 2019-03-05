import React from 'react';
import menu from './menu.module.css';

export default class Menu extends React.Component{

    render() {

        return(
            <div className={menu.navbar}>
                <div className={menu.pointer_block}>
                    <div className={menu.logo_layout}>
                        <div className={menu.logo_icon}></div>
                        <p className={menu.logo_text}>#летосLays</p>
                    </div>
                    <div className={menu.button_layout}>
                        <div className={menu.button}>
                            <div className={menu.button_icon_1}></div>
                            <p className={menu.button_text}>Галерея</p>
                        </div>
                        <div className={menu.button}>
                            <div className={menu.button_icon_2}></div>
                            <p className={menu.button_text}>О проекте</p>
                        </div>
                        <div className={menu.button}>
                            <div className={menu.button_icon_3}></div>
                            <p className={menu.button_text}>Лето с Lay's</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}