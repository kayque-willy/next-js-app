import Link from "next/link"

export const metadata = {
  title: 'Types',
  description: 'Types Description',
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h2>Busca</h2>
      <Link href="/">Voltar</Link>
      {children}
    </div>
  )
}
