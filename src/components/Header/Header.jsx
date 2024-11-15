import logo from "../../images/around-the-us.png";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="header__logo" />
    </header>
  );
}
