import React from "react";
import PostCard from "../../components/PostCard";
import css from "./style.module.css";
import pic1 from "../../assets/img/PostCard/img-1.png";
import pic2 from "../../assets/img/PostCard/img-2.png";
import pic3 from "../../assets/img/PostCard/img-3.png";
import pic4 from "../../assets/img/PostCard/img-5.png";
import FlexBox from "../../components/FlexBox";

function Home() {
  return (
    <div className={css.Home}>
      <PostCard
        picture={pic1}
        header={"Компьютер хэрхэн ажилдаг вэ?"}
        to="/Article/post1"
      />
      <FlexBox>
        <PostCard
          picture={pic2}
          header={"Техник хангамж гэж юу вэ?"}
          to="/Article/post2"
        />
        <PostCard
          picture={pic3}
          header={"Програм хангамж гэж юу вэ?"}
          to="/Article/post3"
        />
        <PostCard
          picture={pic4}
          header={"Компьютер хэрхэн ажилдаг вэ?"}
          to="Article/post4"
        />
      </FlexBox>
    </div>
  );
}
export default Home;
