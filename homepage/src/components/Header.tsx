import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mobile, Pc } from './Responsive';

import NavPc from './layouts/NavPc';
import NavMobile from './layouts/NavMobile';

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
          <Pc>
            <NavPc />            
          </Pc>

          <Mobile>
            <NavMobile />
          </Mobile>
        </div>
      </div>
    </header>
  );
}
