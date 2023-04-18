
export const metadata = {
  title: 'Types',
  description: 'Types Description',
}

export default function TypesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h2>Types</h2>
      {children}
    </div>
  )
}
