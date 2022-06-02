import React from 'react';
import { Card } from "semantic-ui-react";



const PlantCard = ( { plant } ) => {

  return (
    <Card>
          <div className="image">
          <img src={plant.photo} width={500} height={500} img alt={plant.name} className="border"/>
        </div>
        <div className="content">
        <h1>  <div className="header"> {plant.name}</div> </h1>
        </div>
        <h3>
        <div className="extra content">
            <ul>
            Origin: {plant.origin}
           <br></br>
             Pet Safe?: {plant.petsafe}
            <br></br>
             Light Needs: {plant.lightneeds}    
           <br></br>
            Humidity: {plant.humidity}
           <br></br>
            Ideal Substrate: {plant.substrate}
           <br></br>
            Water Needs: {plant.water}
            </ul>
            <br></br>
            <br></br>
        </div>
        </h3>


    </Card>
  )
}

export default PlantCard