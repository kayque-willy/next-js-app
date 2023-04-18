import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  // Requisição à API
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

  //Tratamento das requisições
  const digimons = await responseDigimons.json();
  const types = await responseTypes.json();

  return (
    <section>
      <div>
        <h2>Digimon</h2>

        <Link href="/type">Types</Link>
        <Suspense fallback={
          <p>Carregando Tipos...</p>}>
          <pre>
            {JSON.stringify(types.content.fields, null, 2)}
          </pre>
        </Suspense>

        <Suspense fallback={
          <p>Carregando Digimimons...</p>}>
          <pre>
            {JSON.stringify(digimons, null, 2)}
          </pre>
        </Suspense>

        <br></br>
        <Link href="/api/hello">API</Link>
      </div>
    </section>
  )
}
