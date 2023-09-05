import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mobile, Pc } from './Responsive';

export enum Locales {
  KO = 'ko',
  EN = 'en',
}

export const localeList = [Locales.KO, Locales.EN];

export default function Header() {
  const [useMenu, setUseMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => {
    setUseMenu(() => !useMenu);
  }

  return (
    <header>
      <div className='inner'>
        <div className='header'>
          <Pc>
          <h2>Mement.</h2>
          </Pc>

          <Mobile>
            <h2 onClick={() => toggleMenu()}>menu.</h2>
          </Mobile>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/events">Events</Link>
            <Link to="/events">Events</Link>
          </nav>

          <select defaultValue={Locales.KO} onChange={(e) => changeLang(e)}>
            {localeList.map(locale =>
              <option key={locale}>{locale}</option>
            )}
          </select>
        </div>
      </div>

      <Mobile>
        {useMenu &&
          <aside onClick={() => toggleMenu()}>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/events">Events</Link>
            <Link to="/events">Events</Link>
          </aside>
        }
      </Mobile>
    </header>
  );
}
