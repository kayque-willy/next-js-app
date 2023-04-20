"use client";

import { useEffect, useState } from 'react'

function Sample({ users }: any) {
    const [pageSize, setPage] = useState(20);
    const [reactData, setReactData] = useState([]);
    useEffect(() => {
        console.log("useEffect");
        fetch('https://www.digi-api.com/api/v1/digimon/?pageSize=' + pageSize)
            .then(res => res.json())
            .then(data => {
                setReactData(data.content);
            }).catch((e) => { console.log(e) });
    }, [pageSize]);
    //Aqui é definido a lista de dependencias do useEffect, no qual:
    // }): o useEffect vai ser continuamente
    // }, []): o useEffect vai ser executado uma unica vez
    // }, [pageSize]): o useEffect vai ser executado a cada alteração das dependencias, no caso, a cada alteração da pageSize

    async function load() {
        console.log(pageSize);
        setPage(pageSize + 10);
    }

    return (
        <>
            <h1>Rendered By React JS | Client side rendered</h1>
            <section>
                <ul>
                    {reactData.map((digimon: any, index: number) => (
                        <li key={index}>
                            <span>{digimon.id}</span>
                            <span>{digimon.name}</span>
                            <span>{digimon.image}</span>
                        </li>

                    ))}
                </ul>
            </section>
            <div>
                <button onClick={load}>Carregar</button>
            </div>
            {/* <h1>Rendered By React JS  | Server side rendered</h1>
            <section>
                <ul>
                    {users.map((user: any, index: number) => (
                        <li key={index}>
                            <span>{user.name}</span>
                            <span>{user.username}</span>
                            <span>{user.email}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <div>
                <button onClick={load}>Carregar mais digimons</button>
            </div> */}
        </>
    )
}

// export async function getServerSideProps({ params, req, res, query, preview, previewData, resolvedUrl, locale, locales, defaultLocale }: any) {

//     console.log('Logging : ' + res);
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await data.json();
//     return { props: { users } }
// }

export default Sample;