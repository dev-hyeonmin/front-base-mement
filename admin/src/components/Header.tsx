import { useState } from 'react';

export enum Locales {
  KO = 'ko',
  EN = 'en',
}

export const localeList = [Locales.KO, Locales.EN];

export default function Header() {
  const [useMenu, setUseMenu] = useState(false);

  const toggleMenu = () => {
    setUseMenu(() => !useMenu);
  }

  return (
    <header>
      <div className='inner'>
        <div className='header'>
        </div>
      </div>
    </header>
  );
}
