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
      <Link href="/">Voltar</Link>
      {children}
    </div>
  )
}
