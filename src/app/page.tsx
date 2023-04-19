import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {

  // Requisição à API
  const [responseDigimons] = await Promise.all([
    fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=30', {
      next: {
        revalidate: 30
      },
      cache: "no-store"
    })
  ]);

  //Tratamento das requisições
  const digimons = await responseDigimons.json();

  // Busca um digimon
  async function submit() { }

  // ------------------------- Renderização da página -------------------------
  return (
    <main>
      <section className="header-search">
        <form action="/search">
          <fieldset>
            <input
              className="input-search"
              type="search"
              name="search"
              placeholder="Procuro o digimon pelo nome..."
            />
          </fieldset>
          <button type="submit" value="Submit">Buscar</button>
        </form>
      </section>

      <section className="card-list">
        <Suspense
          fallback={<span>Carregando Digimons...</span>}>
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

      <Link href="/api/hello">API - Call Example</Link>
    </main>
  )
}