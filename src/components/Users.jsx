import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { FaEye, FaEyeSlash, FaArrowRightToBracket } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function Users() {
    const [passVisible, setPassVisible] = useState({});
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const toggleVisible = (room) => {
        setPassVisible((state) => ({
            ...state,
            [room]: !state[room]
        }));
    }

    const restartUser = (room) =>  {
        
    }

    const { users } = useUsers();
    
    return (
        <div className="container-fluid">
            <div className="section-admin">
                <h3>
                    Listado de Usuarios
                    <div className="d-flex align-items-center btn-icon" onClick={() => navigate('/login/admin')} title="Cerrar sesión">
                        <FaArrowRightToBracket />
                    </div>
                </h3>
                <div className="table-content table-header mt-3">
                    <div className="col-1 text-center">
                        <input style={{width: "5em"}} type="number" onChange={(event) => setSearch(event.target.value)} />
                    </div>
                    <div className="col-3 text-center">
                        <span className="pe-2">Habitación</span>
                    </div>
                    <div className="col-2 text-center">
                        Contraseña
                    </div>
                    <div className="col-3 text-center">
                        Saldo
                    </div>
                    <div className="col-3 text-center">
                        Acciones
                    </div>
                </div>
                {
                    users.filter((o) => o.room.toString().includes(search)).map((o, i) => {
                        return(
                            <div className={(i % 2 === 0 ? "table-content table-row-even" : "table-content table-row-odd")}>
                                <div className="col-3 offset-1 text-center">
                                    {o.room}  
                                </div>
                                <div className="col-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        {passVisible[o.room] ?
                                            <input type="number" value={o.pass} />
                                            :
                                            <input disabled type="text" value="****" />
                                        }
                                        <div className="btn-item" onClick={() => toggleVisible(o.room)}>
                                            <span>{passVisible[o.room] ? <FaEyeSlash /> : <FaEye />}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-center">
                                    $ {o.cash}
                                </div>
                                <div className="col-3 text-center">
                                    <div className="row">
                                        <div className="col">
                                            <div className="btn-admin" onClick={() => navigate('/users/cash', { state: o })}>
                                                Cargar/Retirar
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="btn-admin text-danger" onClick={() => restartUser(o.room)}>
                                                Reiniciar
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}