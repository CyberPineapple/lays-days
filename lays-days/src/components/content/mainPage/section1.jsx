import React from 'react';

const Section_1 = (props) => {
  let slideToLeft = " wow slideToLeft";
  let zoom = " wow zoom";
  let fadeIn = " wow fadeIn";

  return(
    <section className={"content-section-1" + slideToLeft}>
      <div className="content-section-1_item-1">
        <div className={"content-section-1_item-1_icon" + zoom} />
        <p className={"content-section-1_item-1_text" + fadeIn}>Загружай фото</p>
        <p className={"content-section-1_item-1_text" + fadeIn}>с хэштегом</p>
        <p className={"content-section-1_item-1_text hashtag" + fadeIn}>#летосLays</p>
      </div>
      <div className="content-section-1_item-2">
        <div className={"content-section-1_item-2_icon" + zoom} />
        <p className={"content-section-1_item-2_text" + fadeIn}>Собирай</p>
        <p className={"content-section-1_item-2_text" + fadeIn}>лайки</p>
      </div>
      <div className="content-section-1_item-3">
        <div className={"content-section-1_item-3_icon" + zoom} />
        <p className={"content-section-1_item-3_text" + fadeIn}>Выигрывай</p>
        <p className={"content-section-1_item-3_text" + fadeIn}>призы</p>
      </div>
      <div className="content-section-1_title">
        <h1 className="content-section-1_title_first-string">ЛЕТО</h1>
        <h1 className="content-section-1_title_middle-string">ВКУСНЕЕ</h1>
        <h1 className="content-section-1_title_last-string">
          С <span>Lay's</span>
        </h1>
      </div>
    </section>
  );
}

export default Section_1;