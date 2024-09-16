import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false); 

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    // Option 1
    let editPlayerName  = <span className="player-name"> {playerName} </span>
    if (isEditing) {
        editPlayerName = <input type="text" required defaultValue={playerName} onChange={handleNameChange}/>
    }

    // Option 2
    // !isEditing ? <span className="player-name"> {name} </span> : <input type="text" required/>

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player"> </span>
            { editPlayerName }
            <span className="player-symbol"> {symbol} </span>
            <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
        </ li>
    );
}