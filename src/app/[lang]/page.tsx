import { getDictionary } from '@/hook/getDictionary';
import { Locale } from '../../../i18n.config';
import styles from './page.module.css';

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const data = await getDictionary(lang);

  return (
    <>
      <main className={styles.main}>
        Hello world {data.form.name}
      </main>
    </>
  )
}
