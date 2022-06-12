import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmAD6ddTDbrX2egxtgmOITK0lAA8EIOii_w&usqp=CAU"
        alt="logo"
      />
    </header>
  );
}
