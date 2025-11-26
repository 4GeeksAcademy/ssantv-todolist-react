import React, { useState } from "react";
import List from "./List";
import "../../styles/form.css"


const Form = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([
    "Buscar a Nemo",
    "Encontrar a Wally",
    "Reunir las 7 bolas de dragón",
    "Capturar a todos los Pokémon",
    "Rescatar a la princesa Peach",
]);


    const handleSubmit = e => {
        e.preventDefault();
        setList([...list, task])
        handleReset();
    }

    const handleChange = e => {
        const value = e.target.value;
        setTask(value);
    }

    const handleReset = e => {
        setTask("");
    }

    const handleClick = (i) => {
        const newList = [...list];
        newList.splice(i, 1);
        setList(newList);
    };

    const handleNewList = e => {
        setList([]);
    }

    return (
        <div className="card ripped-paper">
            <form onSubmit={handleSubmit} className="m-2 d-flex align-items-center gap-2">
                <input value={task} onChange={handleChange} type="text" name="task" placeholder="Inserta una tarea" />
                <input type="button" name="submit" className="submit" onClick={(e) =>
                    task.length < 1 ? alert("No puedes añadir una tarea vacía. Por favor, añade un texto en el recuadro") : handleSubmit(e)} value="Enviar" />
                <input type="button" name="newList" className="newList" onClick={handleNewList} value="Nueva lista" />
            </form>
            <List list={list} handleClick={handleClick} />
        </div>
    )
}
export default Form;