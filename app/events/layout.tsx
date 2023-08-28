import { Metadata } from 'next';
import styles from './page.module.css';
import Header from '@/components/header';

export const matadata: Metadata = {
  title: 'mement base',
  description: 'setting react app base with nextjs'
}

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
