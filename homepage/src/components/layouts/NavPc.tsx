import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SelectLocale from './SelectLocale';

import language from "../../images/language.png";
import search from "../../images/search.png";

export enum Locales {
  KO = 'ko',
  EN = 'en',
}

export const localeList = [Locales.KO, Locales.EN];

export default function NavPc() {
  const { t, i18n } = useTranslation('common');

  return (
    <>
      <div className='logo'>MUSECLINIC</div>

      <nav>
        <Link to="/intro">{t('menu.menu1')}</Link>
        <Link to="/products">{t('menu.menu2')}</Link>
        <Link to="/events">{t('menu.menu3')}</Link>
        <Link to="/events">{t('menu.menu4')}</Link>
      </nav>

      <div className="utils">
        <div className='util-search'>
          <img src={search} />
        </div>

        <SelectLocale />
      </div>
    </>
  );
}
