import React, { useState, useEffect } from 'react'
import { Container } from "@material-ui/core";
import Search from "./Search";

const HomePage = () => {

  const [search, setSearch] = useState("");
  const [plantLoad, setPlantLoad] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/plants")
    .then((resp) => resp.json())
    .then((data)=> {
      setPlantLoad(data)
    })
  } , [])

  const plantSearch = plantLoad.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
       <h1> Welcome to PlantyFo</h1>
       <h2> Where all of your planty information is found</h2>
       <Container>
         <br/>
         <br/>
         <h2>Plant Search</h2>
         <Search search={search} setSearch={setSearch}/>
      </Container>
    </div>

  )
}

export default HomePage 