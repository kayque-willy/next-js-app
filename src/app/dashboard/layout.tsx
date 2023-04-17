
export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard Descrição',
}

export default function DashLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  )
}
