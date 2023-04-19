// [λ  (Server)  server] - side renders at runtime uses [getInitialProps] or [getServerSideProps]
export function Header() {

    return (
        <section className="header-search">
            <form action="/search">
                <fieldset>
                    <input className="input-search" type="search" name="search" placeholder="Procure o digimon pelo nome..."
                    />
                </fieldset>
                <button type="submit" value="Submit">Buscar</button>
            </form>
        </section>
    )
}
