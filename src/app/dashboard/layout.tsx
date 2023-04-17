
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
      <h2>Dashboard</h2>
      {children}
    </div>
  )
}
