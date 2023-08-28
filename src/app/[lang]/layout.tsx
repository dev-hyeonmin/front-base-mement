import '../../styles/reset.css'
import '../../styles/common.css'
import NavBar from '@/components/NavBar'
import { Locale, i18n } from '../../../i18n.config';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <body>
          <header>
            <NavBar />
          </header>
          {children}
      </body>
    </html>
  )
}
