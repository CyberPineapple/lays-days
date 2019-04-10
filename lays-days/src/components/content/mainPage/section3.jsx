import React from 'react';

const Section_3 = (props) => {
  let slideToRight= " wow slideToRight";
  let slideToLeft= " wow slideToLeft";

  let contentSection3Text = (
    <p className="content-section-3_description-block_text">
      Этим летом брэнд Lay's задает тренд на яркое,
      <br/>
      вкусное лето и на позитивный желтый цвет.
    </p>
  );

  if (props.widthScreen <= 680) {
    slideToRight = "";
    slideToLeft = "";

    contentSection3Text = (
        <p className="content-section-3_description-block_text">
          Этим летом брэнд
          <br/>
          Lay's задает тренд
          <br/>
          на яркое, вкусное
          <br/>
          лето и на позитивный
          <br/>
          желтый цвет.
      </p>
      );
  }

  return(
    <section className="content-section-3">
      <div className={"content-section-3_description-block" + slideToRight}>
        <div className="content-section-3_description-block_image" />
        <div className="content-section-3_description-block_title">
          <h2 className="content-section-3_description-block_title_text">Выиграй призы</h2>
          <h2>от Lay's</h2>
        </div>
        {contentSection3Text}
        <div className="content-section-3_description-block_button">О ПРОЕКТЕ</div>
      </div>
      <div className={"content-section-3_image-block" + slideToLeft}>
        <div className="content-section-3_image-block_image" />
      </div>
    </section>
  );
}

export default Section_3;