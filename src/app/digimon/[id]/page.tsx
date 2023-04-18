interface DigimonProps {
    params: {
        id: number
    }
}

export default function Digimon({ params }: DigimonProps) {
    return <h1>Digimon: {params.id}</h1>
}