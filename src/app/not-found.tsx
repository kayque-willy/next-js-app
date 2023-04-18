import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <>
            <div>
                <h1>404 - Não encontrado</h1>
                <p>Desculpe, não há nada aqui</p>
                <Link href="">Voltar</Link>
            </div>
        </>
    );
};

export default NotFoundPage;