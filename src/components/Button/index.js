import React from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";

function Button(props) {
  let classText = props.isActive
    ? `${css.Button} ${css.active}`
    : `${css.Button}`;
  return (
    <div className={classText} onClick={props.clickHandler}>
      <Link to={props.text}>{props.text}</Link>
    </div>
  );
}
export default Button;
