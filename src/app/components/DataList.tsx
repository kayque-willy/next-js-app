import { Card, CardProps } from "./Card"

export interface DigimonList {
    id: number
    name: string
    href: string
    image: string
}

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export function DataList(digimons: DigimonList[]) {
    let sizeList = Object.keys(digimons).length;
    let dataList = [];

    for (let i = 0; i < sizeList; i++) {
        dataList.push(digimons[i]);
    }

    // ------------------------- Renderização da página -------------------------
    return (
        <section className="card-list">
            {dataList.map((digimon) => {
                return (<Card key={digimon.id} {...digimon} />);
            })}
        </section>
    )
}
