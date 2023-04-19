import { Digimon } from "@/app/components/Digimon";

interface PageProps {
    // Recupera os parâmetros digitados na URL
    params: {
        name: string
    },
    // Recupera os parâmetros enviados por GET
    searchParams: {
        search: string;
    };
}

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export default function Search({ searchParams }: PageProps) {

    // ------------------------- Renderização da página -------------------------
    return (
        <div>
            <h2>Digimon Name: {searchParams.search}</h2>
            {/* @ts-expect-error */}
            <Digimon param={searchParams.search} />
        </div>
    )
}