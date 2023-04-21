import { Digimon } from "@/app/components/Digimon";
import { NotFound } from "../components/NotFound";

interface PageProps {
    // Recupera os parâmetros enviados por GET
    searchParams: {
        search: string;
    };
}

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export default function DigimonPage({ searchParams }: PageProps) {

    // ------------------------- Renderização da página -------------------------
    return (
        <div>
            {searchParams.search ?
                /* @ts-expect-error */
                <Digimon param={...searchParams.search} />
                :
                <NotFound />}
        </div>
    )
}