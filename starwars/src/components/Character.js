// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard"

const Character = () => {

    const [character, setCharacter] = useState([])
 
    useEffect(() => {

        axios
            .get("https://swapi.dev/api/people/")
            .then(response => {
                console.log(response)
                setCharacter(response.data.results)
            })
            .catch(error => {
                console.log("error", error)
            })

        }, [])

    return (

        <div>
            {character.map((data, index) => (
                <CharacterCard key={index} character={data}/> 
            ))}
        </div>

    )

};

export default Character;