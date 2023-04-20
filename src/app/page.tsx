//Essa página é renderizada no lado do cliente, por isso precisa da anotação "use cliente"
"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { DataList, DigimonList } from "./components/DataList";

async function Home() {

  // ---------------------------- Hooks ----------------------------
  //[useState] - Adiciona o conteúdo no datasource para renderização
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [page, setPage] = useState(0);

  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const response = await fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=30&page=' + page);
  //     console.log("use effet");
  //     let digimons = await response.json();
  //   }
  //   // call the function
  //   fetchData().catch(console.error);
  // }, []);

  // ----------------------- Requisição à API -----------------------
  const [response] = await Promise.all([
    fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=30&page=' + page, {
      // next: {
      //   revalidate: 30
      // },
      cache: "no-store"
    })
  ]);

  let digimons = await response.json();

  // ------------------------- Funções -------------------------
  // Carrega mais digimons
  async function load() {
    setPage(page + 1);
    // const combined = [].concat(dataSource, digimons.content);
    // setDataSource(combined);
    setDataSource(dataSource => [...dataSource, ...digimons.content]);
  }

  // ------------------------- Renderização da página -------------------------
  return (
    <main>
      <Header />
      <section className="card-list">
        <Suspense fallback={<span>Carregando Digimons...</span>}>
          <>
            {(dataSource.length > 0) ?
              (<DataList {...dataSource} />)
              :
              (<DataList {...digimons.content} />)
            }
          </>
        </Suspense>
      </section>
      <div>
        <button onClick={load}>Carregar mais digimons</button>
      </div>
      <Link href="/api/hello">API - Call Example</Link>
    </main>
  )
}

export default Home;