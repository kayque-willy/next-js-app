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
          <div className="header-img-container">
            <img className="header-img" src="../assets/images/logo.png" width={50} height={50} />
          </div>
        </header>
        {children}
        <footer> © 2023 - Author: <a href="https://github.com/kayque-willy">Kayque Oliveira</a></footer>
      </body>
    </html>
  )
}
