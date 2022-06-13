import s from "./Post.module.css";

export default function Post() {
  return (
    <div className={s.item}>
      <img src="https://mir-avatarok.3dn.ru/_si/0/92302704.jpg" />
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}
