import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlyerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }
    function handleChange(e) {
        setPlyerName(e.target.value);
    }
    // let btnCaption='Save';
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? <input type="text" value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>}
                {/* <span className="player-name">{name}</span> */}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}