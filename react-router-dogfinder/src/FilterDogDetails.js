import React from "react";
import { useParams } from 'react-router-dom';
import DogDetails from "./DogDetails";

/**
 * renders at /dogs/:name
 * finds a dog by name
 * props: dog
 */

function FilterDogDetails({ dogs }) {
    const { name } = useParams();

    if (name) {
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return <DogDetails dog={currentDog} />;
    }
    return null;
}

export default FilterDogDetails;