import React from "react";
import { Link } from "react-router-dom";

/** 
 * Renders dogs at /dogs
 * props: dogs
*/

function DogList({ dogs }) {
    return (
        <div>
            <h1>Click a dog to find out more!</h1>
            {dogs.map(dog => (
            <div key={dog.name}>
                <img src={dog.src} />
                <h3><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h3>
            </div>
            ))}
        </div>
    );
}

export default DogList;