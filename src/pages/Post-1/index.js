import React from "react";
import css from "./style.module.css";
import andCircuit from "../../assets/img/PostCard/andgatecircuit.jpeg";
import andTable from "../../assets/img/PostCard/andtable.png";
import notCircuit from "../../assets/img/PostCard/notgatecircuit.jpg";
import notTable from "../../assets/img/PostCard/nottable.png";
import orCircuit from "../../assets/img/PostCard/orcircuit.png";
import orTable from "../../assets/img/PostCard/ortable.png";
import xorCircuit from "../../assets/img/PostCard/xorcircuit.png";
import xorTable from "../../assets/img/PostCard/xortable.png";

function Post1() {
  return (
    <div className={css.Post1}>
      <h1 className={css.Header}>Компьютер хэрхэн ажилладаг вэ?</h1>
      <p className={css.Paragrap}>
        Хэрэв таниас “хүн төрөлхтөний хамгийн том нээлт юу вэ?” гэж асуувал та
        юу гэж хариулах вэ? Магадгүй гал, газарзүйн их нээлт, уурын хөдөлгүүр
        гэх мэт зүйлүүдийг нэрлэх байх. Гэхдээ технологийн салбарт “транзистор”
        нь маш энгийн ажилгаатай жижигхэн нээлт юм. Хүний тархи 100 тэрбум
        эсүүдийг агуулдаг. Ингэснээр бид бодох болон санах үйлдлүүдийг хийж
        чаддаг. Харин компьютерт трасистор(transistor) гэж нэрлэгддэг хэдэн
        тэрбум эс байдаг. Транзистор бол цахиураар хийгддэг ба энэ ихэвчлэн
        элснээс олддог. Анх бүтээгдсэнээсээ хойш транзистор электроникийн
        салбарт маш их зүйлийг өөрчилсөн. Транзистор бол тусгаарлагчаар болон
        дамжуулагчаар ажиллах чадвартай жижиг хэсэг юм. Тэгэхээр компьютерийн
        төв тооцоолох хэсэгт хэдэн тэрбум транзизтороос бүрдэх логик
        хэлхээ(Logic Gate)-ээр бүрдэнэ. Логик хэлхээ болгон өөрийн гэсэн онцлог
        бүхий 7 төрөл байдаг хэдий ч хамгийн энгийн хэлхээтэй нь AND болон NOT
        гэсэн 2 төрөл байдаг. Харин бусад нь энэ 2 хэлхээнээс хамаарч байдаг.
        Транзистор нь асаалттай (1) эсвэл унтраастай (0) гэсэн 2 л төлөв авах
        боломжтой ба логик хэлхээнүүдийн тусламжтай бүх тооцооллуудыг хийдэг.
      </p>
      <h2>AND gate</h2>
      <img src={notCircuit} />
      <h3>Үнэний хүснэгт (Truth table)</h3>
      <img src={andTable} />
      <h2>NOT gate</h2>
      <img src={andCircuit} />
      <h3>Үнэний хүснэгт (Truth table)</h3>
      <img src={notTable} />
      <h2>OR gate</h2>
      <img src={orCircuit} />
      <h3>Үнэний хүснэгт (Truth table)</h3>
      <img src={orTable} />
      <h2>XOR gate</h2>
      <img src={xorCircuit} />
      <h3>Үнэний хүснэгт (Truth table)</h3>
      <img src={xorTable} />
      <h2 className={css.Header}>Тооллын систем</h2>
      <p className={css.Paragrap}>
        Хүмүүс бид 0-9 хүртэл цифр ашигладаг мөн 10-тын тооллын систем
        ашигладаг. Харин компьютерийн хувьд 2 л цифр дүрслэх чадвартай учир
        2-тын тооллын систем ашигладаг. Хоёртын тооллын системд асаалттай,
        унтраастай буюу 0, 1 гэсэн 2 цифр ашигладаг. 10-тын тоололд орон бүр нь
        10-ын зэргийг илэрхийлдэг бол 2-тын тоололд мөн адил 2-ын зэргүүдийг
        ашигладаг. Жишээ нь: 154 гэдэг тоог 10-тын тооллын системд 100 * 4 + 101
        * 5 + 102 * 1 = 154 болдог. Яг үүнтэй ижил 2-тын тооллын системд бас 20
        * 0 + 21 * 0 + 22 * 1 + 23 * 0 + 24 * 1 + 25 * 0 + 26 * 1 = 154 болно.
        154 = 1010100 гэсэн үг.
      </p>
    </div>
  );
}
export default Post1;
