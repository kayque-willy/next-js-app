import Link from "next/link";

export type CardProps = {
    id: number;
    image: string;
    name: string;
    digimon?: string;
};

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export function Card(digimon: CardProps) {

    return (
        <Link className="card-link" href={'digimon/' + digimon.id}>
            <article
                className="digimon-card">
                <h4>{digimon.id}</h4>
                <img src={digimon.image} alt={digimon.name} width={100} height={100} />
                <h3>{digimon.name}{digimon.digimon}</h3>
            </article>
        </Link>
    )
}
