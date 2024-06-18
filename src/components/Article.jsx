/* eslint-disable react/prop-types */
import { useState } from "react"

import "../styles/articleStyle.css"

export default function Article ({groupe}) {

    const [isFollowed, setIsFollowed] = useState(groupe.suivre);
    
    function handleClickFollowed () {
       setIsFollowed(!isFollowed);
    }
    return (

        <>
        <div className="container">
            <div>
              <img src={groupe.image} alt={groupe.name} />  
            </div>
            <div>
            <h1>{groupe.name} </h1>
            <h2><em>{groupe.type}</em></h2>
            <p>{groupe.description}</p>
            <p><strong>{groupe.lieu}</strong></p>
            </div>
            <button className="btn-suivre" onClick={handleClickFollowed}>{isFollowed ? "✔️" : "Suivre"}</button>
            
        </div>
        </>            
    ) 


} 