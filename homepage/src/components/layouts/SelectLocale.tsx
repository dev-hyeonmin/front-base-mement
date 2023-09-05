import { ChangeEvent, MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import language from "../../images/language.png";
import { current } from '@reduxjs/toolkit';
import { TLocales } from '../../types/types';

export enum Locales {
  KO = 'ko',
  EN = 'en',
}

export const localeList: TLocales[] = [
  {
    type: Locales.KO,
    name: 'Korean'
  },
  {
    type: Locales.EN,
    name: 'English'
  }
];

export default function SelectLocale() {
  const { t, i18n } = useTranslation('common');
  const [onFocus, setOnFocus] = useState(false);
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setOnFocus(false);
  };

  return (
    <div className='util-lang'>
      <img src={language} onClick={() => setOnFocus((current) => !current)} />

      {onFocus &&
        <ul>
          {localeList.map(locale =>
            <li
              key={locale.type}
              className={i18n.language === locale.type ? 'active' : ''}
              onClick={(e) => changeLang(locale.type)}>
              {locale.name}
            </li>
          )}
        </ul>
      }
    </div>
  );
}
