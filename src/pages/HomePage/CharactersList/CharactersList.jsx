import React from "react";

import { CharactersItem } from "./CharacterItem/CharacterItem";

export const CharactersList = ({ list, handleDelete, handleEdit }) => {
    return(
        <ul>
            {list ? list.map((item) => (
                <CharactersItem key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
            )) : <div>Loading...</div>}
            
        </ul>
    )
}
