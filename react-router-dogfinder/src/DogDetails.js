import React from "react";
import { Navigate, useParams } from "react-router-dom";

/**
 * props: dogs
 */

function DogDetails({ dog }) {
    const params = useParams();

    if (!dog) return <Navigate to="/dogs" />
    
    return (
        <div>
            <img src={dog.src} />
            <h2>{dog.name}</h2>
            <h3>{dog.age} years old</h3>
            <ul>{dog.facts.map(f=> (
                <li>{f}</li>
                ))}
            </ul>
        </div>
    )
    
}

export default DogDetails;