import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import language from "../../images/language.png";
import search from "../../images/search.png";
import menu from "../../images/menu.png";
import SelectLocale from './SelectLocale';

export enum Locales {
  KO = 'ko',
  EN = 'en',
}

export const localeList = [Locales.KO, Locales.EN];

export default function NavMobile() {
  const { t, i18n } = useTranslation('common');

  return (
    <>
      <div className='header-top'>
        <div className='logo'>MUSECLINIC</div>

        <div className='menu'>
          <img src={menu} />
        </div>

        <div className="utils">
          <div className='util-search'>
            <img src={search} />
          </div>

          <SelectLocale />
        </div>
      </div>

      <nav>
        <Link to="/">{t('menu.menu1')}</Link>
        <Link to="/events">{t('menu.menu2')}</Link>
        <Link to="/events">{t('menu.menu3')}</Link>
        <Link to="/events">{t('menu.menu4')}</Link>
      </nav>
    </>
  );
}
