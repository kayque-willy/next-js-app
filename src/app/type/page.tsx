"use client";

import { useRouter } from "next/navigation";

async function Type() {

    // Roteamento
    const router = useRouter();

    // Requisição à API
    const response = await fetch('https://www.digi-api.com/api/v1/type');
    const types = await response.json();

    //Função de retorno
    function backHome() {
        router.push('/');
    }

    return (
        <div>
            <button onClick={backHome}>Voltar</button>
            <pre>
                {JSON.stringify(types, null, 2)}
            </pre>
        </div>
    )
}

export default Type;