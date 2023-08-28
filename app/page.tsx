import styles from './page.module.css';
import Header from '@/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        Hello world
      </main>
    </>
  )
}
