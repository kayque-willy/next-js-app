//Essa página é renderizada no lado do cliente, por isso precisa da anotação "use cliente"
"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { DigimonList } from "./components/DigimonList";

function Home() {

  // ---------------------------- Hooks ----------------------------
  //[useState] - Adiciona o conteúdo no datasource para renderização
  const [pageSize, setPage] = useState(20);
  const [digimons, setDigimons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // ----------------------- Requisição à API -----------------------
  //[useEffect] - Adiciona o conteúdo no datasource para renderização
  useEffect(() => {
    console.log("useEffect");
    setIsLoading(true);
    fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=' + pageSize)
      .then(res => res.json())
      .then(data => {
        setDigimons(data.content);
        setIsLoading(false);
        window.scrollTo(0, document.body.scrollHeight * 100);
      }).catch((e) => { console.log(e) });
  }, [pageSize]);
  // Aqui é definido a lista de dependencias do [useEffect], no qual:
  // }): o useEffect vai ser continuamente
  // }, []): o useEffect vai ser executado uma unica vez
  // }, [pageSize]): o useEffect vai ser executado a cada alteração das dependencias, no caso, a cada alteração da pageSize

  // const [response] = await Promise.all([
  //   fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=' + pageSize, {
  //     // next: {
  //     //   revalidate: 30
  //     // },
  //     cache: "default"
  //   })
  // ]);

  // let digimons = await response.json();

  // ------------------------- Funções -------------------------
  // Carrega mais digimons
  async function load() {
    console.log("load " + document.body.scrollHeight);
    setPage(pageSize + 10);
  }

  // ------------------------- Renderização da página -------------------------
  return (
    <main>
      <Header />
      <Suspense fallback={<span>Carregando Digimons...</span>}>
        <DigimonList {...digimons} />
      </Suspense>
      <div>
        {isLoading ? <div className="lds-dual-ring"></div> :
          <button onClick={load}>Carregar mais Digimons</button>}
      </div>
      <Link href="/api/hello">API - Call Example</Link>
    </main>
  )
}

export default Home;