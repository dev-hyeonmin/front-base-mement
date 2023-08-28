import styles from './styles.module.css';
import Header from '@/components/header';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
