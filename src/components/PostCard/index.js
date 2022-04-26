import React from "react";
import css from "./style.module.css";

function PostCard(props) {
  return (
    <div className={css.PostCard}>
      <img src={props.picture} alt="" className={css.Pic} />
      <a href={props.to}>
        <h1 className={css.Header}>{props.header}</h1>
      </a>
    </div>
  );
}

export default PostCard;
