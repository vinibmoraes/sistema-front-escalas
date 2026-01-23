import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <h1>404 - Página não encontrada</h1>
            <Link to="/login">Voltar para Login</Link>
        </>
    )
}