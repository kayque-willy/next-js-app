import Link from "next/link";

interface DigimonProps {
    id: number
}

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export async function Digimon({ id }: DigimonProps) {
    const response = await fetch('https://www.digi-api.com/api/v1/digimon/' + id);
    const digimon = await response.json();
    return (
        <section>
            <Link href="/">Voltar</Link>
            {/* <div>
                      <span>Level</span>
                      {digimon.levels.map((level: any) => {
                        <span>{level.level}</span>
                      })}
                    </div> */}
            <pre>
                {JSON.stringify(digimon, null, 2)}
            </pre>
        </section>
    )
}
