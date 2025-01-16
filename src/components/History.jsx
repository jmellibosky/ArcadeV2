import { useNavigate } from 'react-router-dom';
import { useHistory } from '../hooks/useHistory';

export default function History() {
    const { history } = useHistory();
    const navigate = useNavigate();

    return(
        <div className="section">
            <h3>Movimientos</h3>
            <div className="history">
            {
                history.map((o, i) => {
                    return (
                        <div key={i} className="history-item">
                            <div className="d-flex justify-content-between">
                                <span>{o.item}</span>
                                <span>$ {o.price}</span>
                            </div>
                            <span>{o.time}</span>
                        </div>
                    );
                })
            }
            </div>
            <div id="section-buttons">
                <div className="btn-item" onClick={() => navigate(-1)}>
                    Volver
                </div>
            </div>
        </div>
    );
}