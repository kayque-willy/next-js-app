//Essa página é renderizada no lado do cliente, por isso precisa da anotação "use cliente"
"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

async function Home() {
  // ---------------------------- Hooks ----------------------------
  //[useState] - Adiciona o conteúdo no datasource para renderização
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(0);

  // ----------------------- Requisição à API -----------------------
  const [response] = await Promise.all([
    fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=30&page=' + page, {
      // next: {
      //   revalidate: 30
      // },
      cache: "no-store"
    })
  ]);

  //Tratamento da requisição para JSON
  var digimons = await response.json();

  // ------------------------- Funções -------------------------

  // Carrega mais digimons
  async function load() {
    setPage(page + 1);
    const combined = [].concat(dataSource, digimons.content);
    setDataSource(combined);
  }

  // ------------------------- Renderização da página -------------------------
  return (
    <main>
      <section className="header-search">
        <form action="/search">
          <fieldset>
            <input className="input-search" type="search" name="search" placeholder="Procure o digimon pelo nome..."
            />
          </fieldset>
          <button type="submit" value="Submit">Buscar</button>
        </form>
      </section>

      <section className="card-list">
        <Suspense
          fallback={<span>Carregando Digimons...</span>}>
          {digimons.length === 0 && <span>Sem Digimons!</span>}
          {dataSource.map((digimon: any) => {
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
        <button onClick={load}>Carregar mais digimons</button>
      </section>
      <Link href="/api/hello">API - Call Example</Link>
    </main>
  )
}

export default Home;