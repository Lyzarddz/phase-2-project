import React from 'react'
import PlantCard from './PlantCard'
import { Card } from "semantic-ui-react";

const PlantList = ( { plant } ) => {
  const cards= plant.map((p)=> {
      return(
          <PlantCard
          key={p.id}
          plant={p}
        />
      )
  })  

  return (
    <Card.Group itemsPerRow={3}>
        {cards}
        <h1>From Plant List</h1>
    </Card.Group>
  )
}

export default PlantList;