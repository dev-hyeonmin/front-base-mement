import NavBar from '@/components/NavBar'

interface RootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  console.log(params);
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
