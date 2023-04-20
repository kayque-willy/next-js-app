//Essa página é renderizada no lado do cliente, por isso precisa da anotação "use cliente"
"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { Header } from "./components/Header";
import { DataList } from "./components/DataList";

async function Home() {

  // ---------------------------- Hooks ----------------------------
  //[useState] - Adiciona o conteúdo no datasource para renderização
  const [pageSize, setPage] = useState(20);

  // ----------------------- Requisição à API -----------------------
  const [response] = await Promise.all([
    fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=' + pageSize, {
      // next: {
      //   revalidate: 30
      // },
      cache: "default"
    })
  ]);

  let digimons = await response.json();

  // ------------------------- Funções -------------------------
  // Carrega mais digimons
  async function load() {
    setPage(pageSize + 10);
    // const combined = [].concat(dataSource, digimons.content);
    // setDataSource(combined);
    // setDataSource(dataSource => [...dataSource, ...digimons.content]);
  }

  // ------------------------- Renderização da página -------------------------
  return (
    <main>
      <Header />

      <Suspense fallback={<span>Carregando Digimons...</span>}>
        <DataList {...digimons.content} />
      </Suspense>

      <div>
        <button onClick={load}>Carregar mais digimons</button>
      </div>

      <Link href="/api/hello">API - Call Example</Link>
    </main>
  )
}

export default Home;