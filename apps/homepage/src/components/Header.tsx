import { Link } from "react-router-dom";

export enum Locales {
  KO = 'ko',
  EN = 'en',
}

export const localeList = [Locales.KO, Locales.EN];

interface MenuProps {
  name: string;
  link: string;
}

const menu: MenuProps[] = [
  {
    name: "Intro",
    link: "/intro"
  },
  {
    name: "Products",
    link: "/products"
  },
  {
    name: "menu",
    link: "/"
  },
  {
    name: "menu",
    link: "/"
  }
];

export const Header = () => {
  return (
    <header>
      <div className='inner'>
        <div className='header'>
          <div className="logo">
            MEMENT.
          </div>

          <nav className="menu">
            {menu.map((m, index) =>
              <Link
                key={`menu${index}`}
                to={m.link}>
                {m.name}
              </Link>
            )}
          </nav>

          <div className="utils">

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;