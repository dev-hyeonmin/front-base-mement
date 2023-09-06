import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Intro() {
  return (
    <div className='wrapper'>
      <Helmet>
        <title>mement | intro</title>
      </Helmet>
      <h1>Intro</h1>
    </div>
  );
}
