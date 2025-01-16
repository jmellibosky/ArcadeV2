import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Details() {
    const navigate = useNavigate();
    const item = useLocation().state;

    useEffect(() => {
        if (!item) {
            navigate('/');
        }
    }, [item, navigate]);

    if (!item) {
        return(
            <div>No se ha recibido ningún item</div>
        );
    }

    return (
        <div className="section">
            <h3>{item.name}</h3>
            <div className="item-section">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-column">
                            <span>{item.machines[0].name}</span>
                            <h4>$ {item.price}</h4>
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="list-icon">

                        </div>
                    </div>
                </div>
                <div id="section-buttons">
                    <div className="btn-item" onClick={() => navigate(-1)}>
                        Volver
                    </div>
                    <div className="btn-item">
                        Confirmar
                    </div>
                </div>
            </div>
        </div>
    );
}