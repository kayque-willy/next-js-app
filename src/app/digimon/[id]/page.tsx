import { Digimon } from "@/app/components/Digimon"

interface PageProps {
    params: {
        id: number
    }
}

export default function DigimonPage({ params }: PageProps) {
    return (
        <div>
            <h1>Digimon: {params.id}</h1>
            {/* @ts-expect-error */}
            <Digimon id={params.id} />
        </div>
    )
}