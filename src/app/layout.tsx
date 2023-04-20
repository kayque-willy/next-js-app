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
        <header className="header">
          <h1>Next.js - App</h1>
          <h2>Digimon</h2>
        </header>
        {children}
        <footer> © 2023 - Author: <a href="https://github.com/kayque-willy">Kayque Oliveira</a></footer>
      </body>
    </html>
  )
}
