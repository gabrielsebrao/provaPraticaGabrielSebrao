import { useState, useEffect } from "react";
import './Clubs.css'

export default function Clubs() {
    const [clubes, setClubes] = useState([]);
    const [erro, setErro] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.cartola.globo.com/clubes`);
            const data = await response.json();
            const clubesList = Object.values(data);
            setClubes(clubesList);
        } catch (error) {
            setErro(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="Clubs">
            {erro && <p>Ocorreu um erro: {erro.message}</p>}
            <ul>
            {clubes.slice(1).map((clube) => (
                    <li key={clube.id}>
                    <div className="clubsItems">
                        <img
                            src={clube.escudos['60x60']}
                            alt={`${clube.nome} logo`}

                        />
                        <div>
                            <p>{clube.nome}</p>
                            <p>{clube.apelido}</p>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}