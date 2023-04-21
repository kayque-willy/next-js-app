import { Digimon } from "@/app/components/Digimon";
import { NotFound } from "../../components/NotFound";

interface PageProps {
    // Recupera os parâmetros digitados na URL
    params: {
        id: number
    }
}

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export default function DigimonPage({ params }: PageProps) {

    // ------------------------- Renderização da página -------------------------
    return (
        <div>
            <div>
                {params.id ?
                    /* @ts-expect-error */
                    <Digimon param={...params.id} />
                    :
                    <NotFound />}
            </div>
        </div>
    )
}