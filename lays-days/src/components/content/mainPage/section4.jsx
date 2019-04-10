import React from 'react';

const Section_4 = (props) => {
    let slideToLeft = " wow slideToLeft";
    let slideToRight = " wow slideToRight";
  if (props.widthScreen <= 680) {
    slideToRight = "";
    slideToLeft = "";
  }

  return(
    <section className="content-section-4">
      <div className={"content-section-4_image-block" + slideToRight}>
          <div className="content-section-4_image-block_image"></div>
      </div>
      <div className={"content-section-4_description-block" + slideToLeft}>
        <p className="content-section-4_description-block_title">Лето с Lay's</p>
        <div className="content-section-4_description-block_button">ПЕРЕЙТИ</div>
      </div>
    </section>
  );
}

export default Section_4;