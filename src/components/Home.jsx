import { useNavigate } from "react-router-dom";
import { useDrinks } from "../hooks/useDrinks";
import { useGames } from "../hooks/useGames";

export default function Home() {
    const { drinks } = useDrinks();
    const { games } = useGames();
    const navigate = useNavigate();

    return (
        <>
        <div className="section">
            <h3>Bebidas</h3>
            <div className="scroll-list">
                {
                    drinks.map((o, i) => {
                        return (
                            <div id={"icon-" + i} key={i} className="list-icon" onClick={() => navigate('/machines', { state: o })}>
                                <img src={o.img} alt={o.name} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
        <div className="section">
            <h3>Juegos</h3>
            <div className="scroll-list">
                {
                    games.map((o, i) => {
                        return (
                            <div id={"icon-" + i} key={i} className="list-icon" onClick={() => navigate('/details', { state: o })}>
                                <img src={o.img} alt={o.name} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
        </>
    );
}