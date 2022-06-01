import React from 'react'
import PlantCard from './PlantCard'
import { Card } from "semantic-ui-react";

const PlantList = ( { plant , addPlant} ) => {
  const cards= plant.map((p)=> {
      return(
          <PlantCard
          key={p.id}
          plant={p}
        />
      )
  })  

  return (
    <Card>
        {cards}
    </Card>
  )
}

export default PlantList;