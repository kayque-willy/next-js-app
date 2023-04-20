import { Digimon } from "@/app/components/Digimon"
import Link from "next/link"

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
            {/* @ts-expect-error */}
            <Digimon param={params.id} />
        </div>
    )
}