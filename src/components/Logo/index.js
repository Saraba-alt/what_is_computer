import React from "react";
import css from "./style.module.css";
import logo from "../../assets/img/Logo.png";

function Logo() {
  return (
    <div className={css.Logo_container}>
      <img src={logo} className={css.Logo} />
    </div>
  );
}
export default Logo;
