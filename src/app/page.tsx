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

  // ------------------------- Renderização da página -------------------------
  return (
    <section>
      <div>
        <h2>Digimon</h2>

        <nav>
          <Link href="/levels">
            <h3>Níveis</h3>
          </Link>
          <Suspense fallback={
            <p>Carregando Niveis...</p>}>
            <pre>
              {JSON.stringify(types.content.fields, null, 2)}
            </pre>
          </Suspense>
        </nav>
        <section className="card-list">
          <Suspense fallback={
            <p>Carregando Digimons...</p>}>
            {digimons.length === 0 && <span>Sem Digimons!</span>}
            {digimons.content.map((digimon: any) => {
              return (
                <>
                  <Link className="card-link" href={'digimon/' + digimon.id}>
                    <article className="digimon-card">
                      <h4>{digimon.id}</h4>
                      <img src={digimon.image} alt={digimon.name} width={100} height={100} />
                      <h3>{digimon.name}</h3>
                    </article>
                  </Link>
                </>
              );
            })}
          </Suspense>
        </section>

        <br></br>

        <Link href="/api/hello">API - Call Example</Link>
      </div>
    </section>
  )
}
