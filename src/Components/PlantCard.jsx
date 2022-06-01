import React from 'react';
import { Card } from "semantic-ui-react";



const PlantCard = ( { plant } ) => {

  return (
    <Card>
          <div className="image">
          <img src={plant.photo} width={500} height={500} img alt={plant.name}/>
        </div>
        <div className="content">
          <div className="header">{plant.name}</div>
        </div>
        <div className="extra content">
            <ul>
           <li>
            Origin: {plant.origin}
            </li>
            <li>
            Pet Safe?: {plant.petsafe}
            </li>
            <li>
             Light Needs: {plant.lightneeds}    
            </li>
            <li>
            Humidity: {plant.humidity}
            </li>
            <li>
            Ideal Substrate: {plant.substrate}
            </li>
            <li>
            Water Needs: {plant.water}
            </li>
            </ul>
            <br></br>
            <br></br>
        </div>


    </Card>
  )
}

export default PlantCard