import s from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img
          height="300px;"
          width="100%"
          src="https://funart.pro/uploads/posts/2021-03/1617081181_10-p-oboi-panorama-lesa-14.jpg"
          alt="content-avatar"
        />
      </div>
      <div>avatar + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
}
