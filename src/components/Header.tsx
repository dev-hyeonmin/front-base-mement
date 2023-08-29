import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const { t, i18n } = useTranslation();
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  }

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
      </nav>

      <button onClick={() => changeLang('en')}>change lang</button>
    </header>
  );
}