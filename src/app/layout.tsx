import '../styles/reset.css'
import '../styles/common.css'
import NavBar from '@/components/navBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
