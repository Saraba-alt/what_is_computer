import React from "react";
import css from "./style.module.css";

function FlexBox(props) {
  return <div className={css.Container}>{props.children}</div>;
}

export default FlexBox;
