import React from "react";
import { Card, CardHeader, CardBody, CardText } from "reactstrap"

const CharacterCard = (props) => {

    const { character } = props

    return (

        <Card>
            <div>
                <h2>{character.name}</h2>
            </div>
            <div>
                <p>{character.height}</p>
                <p>{character.mass}</p>
                <p>{character.hair_color}</p>
                <p>{character.skin_color}</p>
            </div>
        </Card>

    )

};

export default CharacterCard;


