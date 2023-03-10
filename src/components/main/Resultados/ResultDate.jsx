import { useEffect, useState } from "react";
import { firebaseBuscar } from "../../../utils/firebase";

import "./ResultDate.styles.css";
import "../../../bootstrap/bootstrap-spinner.css"

const ResultDate = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        buscarUsuarios();
    }, []);

    async function buscarUsuarios() {
        let resultado = await firebaseBuscar("usuarios");
        setUsuarios(resultado);
    }

    return (
        <div className="result">
            <h3>Datos</h3>
            <table border="1px solid #ccc">
                <thead>
                    <tr>
                        <td>Nombre completo</td>
                        <td>Correo electrónico</td>
                        <td>Fecha de nacimiento</td>
                        <td>País de origen</td>
                    </tr>
                </thead>
                <tbody>
                    {!usuarios && (
                        <div className="container">
                            <button className="btn btn-primary" type="button" disabled>
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                Cargando...
                            </button>
                        </div>
                    )}
                    {usuarios && usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.full_name}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.birth_date}</td>
                            <td>{usuario.country_of_origin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResultDate; 
