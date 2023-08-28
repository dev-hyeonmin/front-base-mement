import '../styles/reset.css'
import '../styles/common.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head />
      <body>{children}</body>
    </html>
  )
}
