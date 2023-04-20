import { Card, CardProps } from "./Card"

export interface DigimonList {
    digimons: {
        id: number
        name: string
        href: string
        image: string
    }
}

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export function DataList(digimons: any[]) {
    let sizeList = Object.keys(digimons).length;
    let dataList = [];
    for (let i = 0; i < sizeList; i++) {
        dataList.push(digimons[i]);
    }

    // ------------------------- Renderização da página -------------------------
    return (
        <>
            {Array.isArray(dataList) ? dataList.map((digimon) => {
                return (<><Card {...digimon} /></>);
            }) : (
                <span>Carregando...</span>
            )}
        </>
    )
}
