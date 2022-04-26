import React from "react";
import pic2 from "../../assets/img/PostCard/img-2.png";
import pic3 from "../../assets/img/PostCard/img-3.png";
import pic4 from "../../assets/img/PostCard/img-5.png";
import pic1 from "../../assets/img/PostCard/img-1--small.png";
import FlexBox from "../../components/FlexBox";
import PostCard from "../../components/PostCard";
import css from "./style.module.css";

function Article() {
  return (
    <div className={css.Article}>
      <FlexBox>
        <PostCard picture={pic2} header={"Техник хангамж гэж юу вэ?"} />
        <PostCard picture={pic3} header={"Програм хангамж гэж юу вэ?"} />
        <PostCard picture={pic4} header={"Компьютер хэрхэн ажилдаг вэ?"} />
        <PostCard
          picture={pic1}
          header={"Компьютер хэрхэн ажилдаг вэ?"}
          to="/Article/post1"
        />
      </FlexBox>
    </div>
  );
}
export default Article;
