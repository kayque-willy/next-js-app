import { Digimon } from "@/app/components/Digimon"

interface PageProps {
    params: {
        id: number
    }
}

// [λ  (Server)  server] - side renders at runtime 
// uses [getInitialProps] or [getServerSideProps]
export default function DigimonPage({ params }: PageProps) {
    return (
        <div>
            <h1>Digimon ID: {params.id}</h1>
            {/* @ts-expect-error */}
            <Digimon id={params.id} />
        </div>
    )
}