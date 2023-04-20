interface DigimonProps {
    param: string
}

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
// id: 7 [x]
// name: Apocalymon [x]
// xAntibody: false
// images[1] [x]
// levels[2] [x]
// types[1] [x]
// attributes[3] [x]
// fields[3] [x]
// releaseDate: 1999 [x]
// descriptions[2] [x]
// skills[4] [x]
// priorEvolutions[21]
// nextEvolutions[2]

export async function Digimon({ param }: DigimonProps) {
    const response = await fetch('https://www.digi-api.com/api/v1/digimon/' + param);
    const digimon = await response.json();
    return (
        <section>
            <article className="">
                <h3 className="">{digimon.name}</h3>
                <h5 className="">{digimon.id}</h5>
                <h4>({digimon.releaseDate})</h4>
                <div className="card-img">
                    <img className="" src={digimon.images[0].href} alt={digimon.name} width={50} height={50} />
                </div>
                <div className="">
                    <p className="card-description">
                        {digimon.descriptions[1].description}
                    </p>
                    <div className="card-content">
                        <div className="">
                            <h4 className="">Level</h4>
                            <ul>
                                {digimon.levels.map((level: any, index: number) => {
                                    return (<li key={index} className="">{level.level}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="">Attribute</h4>
                            <ul>
                                {digimon.attributes.map((attribute: any, index: number) => {
                                    return (<li key={index} className="">{attribute.attribute}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="">Type</h4>
                            <ul>
                                {digimon.types.map((type: any, index: number) => {
                                    return (<li key={index} className="">{type.type}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="">Skills</h4>
                            <ul>
                                {digimon.skills.map((skill: any, index: number) => {
                                    return (<li key={index} className="">{skill.skill}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="card-content-mid">
                        <h4 className="">Fields</h4>
                        <ul>
                            {digimon.fields.map((field: any, index: number) => {
                                return (<li key={index} className="">{field.field}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="card-content-bottom">
                        <div className="">
                            <h4 className="">Prior Evolutions</h4>
                            <ul>
                                {digimon.priorEvolutions.map((evolution: any, index: number) => {
                                    return (<li key={index} className="">{evolution.digimon}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="">Next Evolutions</h4>
                            <ul>
                                {digimon.nextEvolutions.map((evolution: any, index: number) => {
                                    return (<li key={index} className="">{evolution.digimon}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
