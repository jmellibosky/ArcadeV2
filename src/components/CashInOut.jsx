import { useNavigate, useLocation } from "react-router-dom";
import { useHistory } from '../hooks/useHistory';
import { useState } from "react";

import { FaListUl } from "react-icons/fa6";

export default function CashInOut() {
    const navigate = useNavigate();
    const { history } = useHistory();
    
    const user = useLocation().state;
    const [isDeposit, setIsDeposit] = useState(null);
    const [amount, setAmount] = useState(0);

    const confirm = () => {
        navigate('/users');
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="section-admin text-center">
                        <h3>
                            <span>Habitación N°{user.room}</span>
                            <div className="d-flex align-items-center btn-icon" onClick={() => navigate('/users')} title="Volver al listado">
                                <FaListUl />
                            </div>
                        </h3>
                        <div className="pt-2">
                            Saldo actual:
                            <h4>$ {user.cash}</h4>
                        </div>
                        <hr />
                        Seleccione el tipo de movimiento:
                        <div className="row">
                            <div className="col-6">
                                <div className="btn-admin" onClick={() => setIsDeposit(true)}>
                                    Cargar
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="btn-admin" onClick={() => setIsDeposit(false)}>
                                    Retirar
                                </div>
                            </div>
                        </div>
                        {isDeposit !== null && (
                            <>
                                <hr />
                                <input type="number" onChange={(event) => setAmount(event.target.value)} />
                                <span>Saldo luego del movimiento:</span>
                                {
                                    isDeposit ?
                                    <h4>$ {user.cash + (amount ? parseInt(amount) : 0)}</h4> :
                                    <h4>$ {user.cash - (amount ? parseInt(amount) : 0)}</h4>
                                }
                                <div className="btn-admin" onClick={() => confirm()}>
                                    Confirmar transacción
                                </div>
                            </>    
                        )}
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="section-admin">
                        <h3>Movimientos</h3>
                        <div className="history mt-3">
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
                    </div>
                </div>
            </div>
        </div>
    );
}