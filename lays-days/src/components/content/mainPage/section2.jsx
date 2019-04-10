import React from 'react';
import image_1 from '../../../images/1.png';
import image_2 from '../../../images/2.png';
import image_3 from '../../../images/3.png';
import image_4 from '../../../images/4.png';
import image_5 from '../../../images/5.png';
import image_6 from '../../../images/6.png';
import image_7 from '../../../images/7.png';
import image_8 from '../../../images/8.png';
import image_9 from '../../../images/9.png';

const Section_2 = (props) => {
  let slideToRight= " wow slideToRight";
  if (props.widthScreen <= 680) {
    slideToRight = "";
  }

  return(
    <section className={"content-section-2" + slideToRight}>
      <div className="content-section-2_description-block">
        <div className="content-section-2_description-block_image" />
        <div className="content-section-2_description-block_title">
          <h2 className="content-section-2_description-block_title_text">Загружай</h2>
          <h2 className="content-section-2_description-block_title_text">фото</h2>
          <h2 className="content-section-2_description-block_title_text">с хэштегом </h2>
          <h2 className="content-section-2_description-block_title_text_hashtag">#летосLays</h2>
        </div>
        <div className="content-section-2_description-block_button">ГАЛЕРЕЯ</div>
      </div>
      <div className="content-section-2_pictures-block">
        <div
          style={{
            backgroundImage: `url(${image_1})`,
            backgroundSize: 'cover'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${image_2})`,
            backgroundSize: 'cover'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${image_3})`,
            backgroundSize: 'cover'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${image_4})`,
            backgroundSize: 'cover'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${image_5})`,
            backgroundSize: 'cover'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${image_6})`,
            backgroundSize: 'cover'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${image_7})`,
            backgroundSize: 'cover'
          }}
        />
        <div className="content-section-2_pictures-block_photo-block"
          style={{
            backgroundImage: `url(${image_8})`,
            backgroundSize: 'cover'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${image_9})`,
            backgroundSize: 'cover'
          }}
        />
      </div>
    </section>
  );
}

export default Section_2;