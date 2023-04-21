import Link from "next/link";
import { Card } from "./Card";

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
            <article className="digimon-page">
                <h3 className="digimon-title">{digimon.name}</h3>
                <h5 className="digimon-subtitle">ID: {digimon.id}</h5>
                <h4 className="digimon-subtitle">({digimon.releaseDate})</h4>
                <div className="return-link">
                    <Link className="button-return" href="/">Voltar</Link>
                </div>
                <div className="card-img">
                    <img className="digimon-img" src={digimon.images[0].href} alt={digimon.name} width={20} height={20} />
                </div>
                <div className="digimon-card-content">
                    <p className="card-description">
                        {digimon.descriptions.map((description: any) => {
                            return (description.language === "en_us" && description.description)
                        })}
                    </p>
                    <div className="card-content">
                        <div className="card-columm">
                            <h4 className="digimon-atribute">Level</h4>
                            <ul>
                                {digimon.levels.map((level: any, index: number) => {
                                    return (<li key={index} className="">{level.level}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="card-columm">
                            <h4 className="digimon-atribute">Attribute</h4>
                            <ul>
                                {digimon.attributes.map((attribute: any, index: number) => {
                                    return (<li key={index} className="">{attribute.attribute}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="card-columm">
                            <h4 className="digimon-atribute">Type</h4>
                            <ul>
                                {digimon.types.map((type: any, index: number) => {
                                    return (<li key={index} className="">{type.type}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="card-columm">
                            <h4 className="digimon-atribute">Skills</h4>
                            <ul>
                                {digimon.skills.map((skill: any, index: number) => {
                                    return (<li key={index} className="">{skill.skill}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="card-content-mid">
                        <h4 className="digimon-atribute">Fields</h4>
                        <div className="fields">
                            {digimon.fields.map((field: any, index: number) => {
                                return (
                                    <>
                                        <div key={index} className="field-item">
                                            <div key={index} className="field-item-img">
                                                <img className="level-img" src={"https://digimon-api.com/images/etc/fields/" + field.field + ".png"} alt={digimon.name} width={20} height={20} />
                                            </div>
                                            <div key={index} className="">
                                                {field.field}
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="card-content-bottom">
                        <div className="digimon-evolution">
                            <h4 className="digimon-atribute">Prior Evolutions</h4>
                            <ul>
                                {digimon.priorEvolutions.map((evolution: any) => {
                                    return (
                                        <Card className="card-evolution" key={evolution.id} {...evolution} />
                                        // <li key={index} className="">
                                        //     <img className="" src={evolution.image} alt={evolution.name} width={20} height={20} />
                                        //     <span>{evolution.digimon}</span>
                                        // </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="digimon-evolution">
                            <h4 className="digimon-atribute">Next Evolutions</h4>
                            {digimon.nextEvolutions.map((evolution: any) => {
                                return (
                                    <Card className="card-evolution" key={evolution.id} {...evolution} />
                                    // <li key={index} className="">
                                    //     <img className="" src={evolution.image} alt={evolution.name} width={20} height={20} />
                                    //     {evolution.digimon}
                                    // </li>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
