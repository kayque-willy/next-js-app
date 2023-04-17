import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <br></br>
      <Link href="/api/hello">API</Link>
    </div>
  )
}
