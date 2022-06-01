import React from 'react';
import { Card } from "semantic-ui-react";



const PlantCard = ( { plant } ) => {

  return (
    <Card>
          <div className="image">
          <img src={plant.photo} width={500} height={500} img alt={plant.name}/>
        </div>
        <div className="content">
        <h1>  <div className="header">{plant.name}</div> </h1>
        </div>
        <h3>
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
        </h3>


    </Card>
  )
}

export default PlantCard