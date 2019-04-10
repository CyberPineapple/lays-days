import React, {Fragment} from 'react';

const Footer = (props) =>{
    let footerContent = (
      <Fragment>
        <div className="footer_icon" />
        <p className="footer_text">© 2015 Lay's Russia. Все права защищены</p>
      </Fragment>
      );
      if (props.widthScreen <= 680) {
        footerContent = <p className="footer_text">© 2015 Lay's Russia</p>;
      }
    return(
      <div className="footer">
        {footerContent}
        <div className="footer_button-block">
          <a href="https://www.facebook.com/lays.russia" target="blank">
            <div className="footer_button-block_button button-fb" />
          </a>
          <a href="https://vk.com/lays_russia" target="blank">
            <div className="footer_button-block_button button-vk" />
          </a>
          <a href="https://lays.ru/" target="blank">
            <div className="footer_button-block_button button-lays" />
          </a>
          <a href="https://www.youtube.com/user/LaysRussia" target="blank">
            <div className="footer_button-block_button button-yt" />
          </a>
        </div>
      </div>
    );
}

export default Footer;