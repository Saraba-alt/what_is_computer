import React, { useState } from "react";
import css from "./style.module.css";

import Logo from "../Logo";
import Menu from "../Menu";

function Navbar() {
  let [path, setPath] = useState(window.location.pathname);
  const clickHandler = () => {
    setPath(window.location.pathname);
  };
  let pageName;
  pageName = path.split("/")[1];
  return (
    <div className={css.Navbar}>
      <div className={css.Navbar_container}>
        <Logo />
        <Menu
          clickHandler={clickHandler}
          activePage={pageName}
          buttons={["Home", "Article", "Quiz"]}
        />
      </div>
    </div>
  );
}
export default Navbar;
