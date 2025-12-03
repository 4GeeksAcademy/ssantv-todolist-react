import React, { useState } from "react";
import "../../styles/list.css";

const List = ({ list, handleClick }) => {
  const [done, setDone] = useState([]);

  const toggleDone = (index) => {
    setDone(done =>
      done.includes(index)
        ? done.filter(i => i !== index)
        : [...done, index]);
  };

  const handleDelete = (e, index) => {
    e.stopPropagation(); // para evitar que se tache la siguiente tarea cuando borramos una
    handleClick(index);

    setDone(done =>
      done.filter(element => element !== index)
        .map(element => (element > index ? element - 1 : i))
    );
  };

  const pending = list.length - done.length;

  return (
    <>
      <ul>
        {list.map((el, i) => (
          <li
            key={i}
            onClick={() => toggleDone(i)}
            className="mb-2 d-flex justify-content-between"
          >
            <span className={done.includes(i) ? "done" : ""}>
              {el}
            </span>
            <button className="deleteButton" onClick={(e) => handleDelete(e, i)}><span></span></button>
          </li>
        ))}
      </ul>
      <div className="remainingTasks">{pending} tareas pendientes</div>
    </>
  );
};

export default List;
