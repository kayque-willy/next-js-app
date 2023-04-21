import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <>
            <div>
                <h1>404 - Não encontrado</h1>
                <p>Desculpe, não há nada aqui</p>
                <div className="return-link">
                    <Link className="button-return" href="/">Voltar</Link>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;