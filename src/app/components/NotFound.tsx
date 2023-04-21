import Link from "next/link";

export function NotFound() {

    return (
        <article className="not-found-article">
            <h2 className="not-found-title">Não encontrado!</h2>
            <div className="return-link-not-found">
                <Link className="button-return" href="/">Voltar</Link>
            </div>
            <img className="digimon-img" src="../assets/images/not-found.png" width={50} height={50} />
        </article>
    )
}