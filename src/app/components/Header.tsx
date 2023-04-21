import { useState } from "react";
import { Spinner } from "./Spinner";

// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export function Header() {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <section className="header-search">
            <form onSubmit={() => { setIsLoading(true) }} action="/digimon">
                <fieldset>
                    <input className="input-search" type="search" name="search" placeholder="Procure o digimon pelo nome..."
                    />
                </fieldset>
                <button type="submit" value="Submit">Buscar</button>
                {isLoading && <Spinner />}
            </form>
        </section>
    )
}
