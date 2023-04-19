//Essa página é renderizada no lado do cliente, por isso precisa da anotação "use cliente"
"use client";

import { useRouter } from "next/navigation";

// [○  (Static)]  automatically rendered as static HTML uses no initial props
async function Levels() {

    // Roteamento
    const router = useRouter();

    // Requisição à API
    const response = await fetch('https://www.digi-api.com/api/v1/level');
    const levels = await response.json();

    //Função de retorno
    function backHome() {
        router.push('/');
    }

    // ------------------------- Renderização da página -------------------------
    return (
        <div>
            <button onClick={backHome}>Voltar</button>
            <pre>
                {JSON.stringify(levels, null, 2)}
            </pre>
        </div>
    )
}

export default Levels;