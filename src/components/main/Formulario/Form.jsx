
import { useNavigate } from "react-router-dom";

import {items} from "../../../utils/db.json";
import { firebaseGuardar } from "../../../utils/firebase";
import { swal } from "../../../utils/swal";

import "./Form.styles.css";


const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let full_name = e.currentTarget.full_name.value;
    let email = e.currentTarget.email.value;
    let birth_date = e.currentTarget.birth_date.value;
    let country_of_origin = e.currentTarget.country_of_origin.value;
    
    let usuario = {
      full_name,
      email,
      birth_date,
      country_of_origin
    };


    firebaseGuardar("usuarios", usuario);

    swal();
    
    navigate("resultDate");
  }
  
  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Greydive</h1>
        {items.map(item => (
          item.type != "select"?
              <div key={item.name}>
                <label>{item.label}</label>
                <input
                  type={item.type}
                  name={item.name}
                  required={item.required}
                />
              </div>
          : 
              <div key={item.label}>
                <label>{item.label}</label>
                <select
                  name={item.name}
                  required={item.required}
                >
                  <option value="">Seleccionar pais...</option>
                  {item?.options?.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
        ))}
      </form>
    </div>
  );
};

export default Form;