import Link from "next/link";

interface DigimonProps {
    id: number
}

export async function Digimon({ id }: DigimonProps) {
    const response = await fetch('https://www.digi-api.com/api/v1/digimon/' + id);
    const digimon = await response.json();
    return (
        <section>
            <Link href="/">Voltar</Link>
            <pre>
                {JSON.stringify(digimon, null, 2)}
            </pre>
        </section>
    )
}
