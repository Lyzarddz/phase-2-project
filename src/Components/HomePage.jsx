import React, { useState, useEffect } from 'react'
import { Container } from "@material-ui/core";
import Search from "./Search";
import { RiPlantLine} from "react-icons/ri"
import PlantList from './PlantList';
import { GiPlantRoots } from "react-icons/gi"



const HomePage = () => {

  const [search, setSearch] = useState("");
  const [plantLoad, setPlantLoad] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
    .then((resp) => resp.json())
    .then((data)=> {
      setPlantLoad(data)
    })
     
  } , [])

  
  const plantSearch = plantLoad.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='primary'>
       <h1 className='largeText'> <GiPlantRoots /> Welcome to PlantyFo <GiPlantRoots/> </h1>
       <h2 > Where all of your planty information is found</h2> 
       <Container>
         <br/>
         <h2>  <RiPlantLine/> Plant Search  <RiPlantLine/> </h2>
         <Search search={search} setSearch={setSearch}/>
      </Container>
      <br></br>
      <br></br>
      <PlantList plant={plantSearch} />
    
    </div>
    

  )
}

export default HomePage 