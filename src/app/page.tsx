import Link from "next/link";

export default async function Home() {
  const response = await fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=30');
  const digimons = await response.json();
  return (
    <section>
      <div>
        <h2>Digimon</h2>
        <Link href="/digimon/type">Types</Link>
        <br></br>
        <Link href="/api/hello">API</Link>
      </div>
      <pre>
        {JSON.stringify(digimons, null, 2)}
      </pre>
    </section>
  )
}
