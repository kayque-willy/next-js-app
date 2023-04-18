import Link from "next/link";

export default async function Home() {
  const [responseDigimons, responseTypes] = await Promise.all([
    fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=30', {
      next: {
        revalidate: 30
      },
      cache: "no-store"
    }),
    fetch('https://www.digi-api.com/api/v1/level/', {
      cache: "no-store"
    })
  ]);
  const digimons = await responseDigimons.json();
  const types = await responseTypes.json();
  return (
    <section>
      <div>
        <h2>Digimon</h2>
        <Link href="/digimon/type">Types</Link>
        <pre>
          {JSON.stringify(types.content.fields, null, 2)}
        </pre>
        <br></br>
        <Link href="/api/hello">API</Link>
      </div>
      <pre>
        {JSON.stringify(digimons, null, 2)}
      </pre>
    </section>
  )
}
