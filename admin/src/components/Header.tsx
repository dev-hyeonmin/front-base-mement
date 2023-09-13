import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../libs/useUser';
import Nav from './Nav';

export enum Locales {
  KO = 'ko',
  EN = 'en',
}

export const localeList = [Locales.KO, Locales.EN];

export default function Header() {
  const navigate = useNavigate();
  const { userLoading, isLoggedIn } = useUser();

  useEffect(() => {
    if (!userLoading && !isLoggedIn) {
      navigate('/login');
    }
  }, [userLoading]);

  return (
    <header>
      <Nav />
    </header>
  );
}
