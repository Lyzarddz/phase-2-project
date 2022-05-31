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
    <div>PlantList</div>
  )
}

export default PlantList;