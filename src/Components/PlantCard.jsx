import React from 'react';
import { Card } from "semantic-ui-react";

const PlantCard = ( { plant } ) => {

  return (
    <Card>
          <div className="image">
          <img src ={""} img alt={plant.name}/>
        </div>
        <div className="content">
          <div className="header">{plant.name}</div>
        </div>
        <div className="extra content">
          {/* <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span> */}
        </div>


    </Card>
  )
}

export default PlantCard