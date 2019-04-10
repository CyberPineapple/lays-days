import React, {Fragment} from "react";
import Section1 from "./section1.jsx";
import Section2 from "./section2.jsx";
import Section3 from "./section3.jsx";
import Section4 from "./section4.jsx";


const MainPage = (props) => {

  return (
    <Fragment>
        <Section1 widthScreen={props.widthScreen} />
        <Section2 widthScreen={props.widthScreen} />
        <Section3 widthScreen={props.widthScreen} />
        <Section4 widthScreen={props.widthScreen} />
    </Fragment>
  );
}

export default MainPage;