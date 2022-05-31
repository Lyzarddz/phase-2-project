import { PlayCircleOutlineTwoTone } from '@material-ui/icons';
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
        </div>


    </Card>
  )
}

export default PlantCard