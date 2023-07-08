import { useState } from 'react';
import './Listafetch.css';

const Listafetch = () => {
  const [tarea, setTarea] = useState('');
  const [nuevaTarea, setNuevaTarea] = useState([]);

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (tarea !== '') {
      setNuevaTarea(nuevaTarea.concat(tarea));
      setTarea('');
    }
  };

  return (
    <div className="contenedor-lista">
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={tarea} />
        <button className="boton" onClick={handleClick} type="submit">
          Guardar
        </button>
        {
          <ul className="list-group">
            {nuevaTarea.length > 0 ? (
              nuevaTarea.map((item, index) => {
                return (
                  <li className="lista list-group" onClick={handleClick}>
                    {item}
                  </li>
                );
              })
            ) : (
              <p className="parrafo-lista">No hay tareas</p>
            )}
          </ul>
        }
      </form>
    </div>
  );
};

export default Listafetch;
