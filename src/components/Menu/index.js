import React from "react";
import Button from "../Button";
import css from "./style.module.css";

function Menu(props) {
  return (
    <div className={css.Menu}>
      {props.buttons.map((el) => {
        if (props.activePage === el)
          return (
            <Button
              clickHandler={props.clickHandler}
              key={el}
              isActive
              text={el}
            />
          );
        else
          return (
            <Button clickHandler={props.clickHandler} text={el} key={el} />
          );
      })}
    </div>
  );
}
export default Menu;
