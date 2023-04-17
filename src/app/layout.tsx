import './globals.css'

export const metadata = {
  title: 'Next.js - App',
  description: 'Exemplo de aplicação web next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>Next.js - App</h1>
        {children}
      </body>
    </html>
  )
}
