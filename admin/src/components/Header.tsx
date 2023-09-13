import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../libs/useUser';

export enum Locales {
  KO = 'ko',
  EN = 'en',
}

export const localeList = [Locales.KO, Locales.EN];

export default function Header() {
  const navigate = useNavigate();
  const [useMenu, setUseMenu] = useState(false);
  const { userLoading, isLoggedIn, user } = useUser();

  useEffect(() => {
    // console.log(userLoading, isLoggedIn, user);
    if(!userLoading && !isLoggedIn) {
      navigate('/login');
    }
  }, [userLoading]);

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
