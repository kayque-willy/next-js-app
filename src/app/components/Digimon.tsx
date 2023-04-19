interface DigimonProps {
    param: string
}

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export async function Digimon({ param }: DigimonProps) {
    const response = await fetch('https://www.digi-api.com/api/v1/digimon/' + param);
    const digimon = await response.json();
    return (
        <section>
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
