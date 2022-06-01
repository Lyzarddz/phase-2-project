import React, { useState } from 'react';
import { Form } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';


const CreatePlant = ({ addPlant }) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    petsafe: "",
    lightneeds: "",
    humidity: "",
    substrate: "",
    water: "",
    photo: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    // Semantic UI React's Form component handles the preventDefault automatically!

    const newPlant = {
      name: formData.name,
     origin: formData.origin,
     petsafe: formData.petsafe,
     lightneeds: formData.lightneeds,
     humidity: formData.humidity,
     substrate: formData.substrate,
     water: formData.water,
     photo: formData.photo,
    
  };

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then(addPlant);
      navigate("/");
  }
 
  return (
    <div>
      <h1>Add a Plant!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br></br>
          <Form.Input
            fluid
            label="Origin"
            placeholder="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
          />
           <br></br>
          <Form.Input
            fluid
            label="Pet Safe"
            placeholder="Pet Safe"
            name="petsafe"
            value={formData.petsafe}
            onChange={handleChange}
          />
           <br></br>
          <Form.Input
            fluid
            label="Light Needs"
            placeholder="lightneeds"
            name="lightneeds"
            value={formData.lightneeds}
            onChange={handleChange}
          />
           <br></br>
          <Form.Input
            fluid
            label="Humidity"
            placeholder="humidity"
            name="humidity"
            value={formData.humidity}
            onChange={handleChange}
          />
           <br></br>
          <Form.Input
            fluid
            label="Substrate"
            placeholder="substrate"
            name="substrate"
            value={formData.substrate}
            onChange={handleChange}
          />
           <br></br>
          <Form.Input
            fluid
            label="Water Needs"
            placeholder="water"
            name="water"
            value={formData.water}
            onChange={handleChange}
          />
           <br></br>
          <Form.Input
            fluid
            label="Image URL"
            placeholder="photo"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
          />
           <br></br>

        </Form.Group>
        <Form.Button onClick={()=> {alert("Plant Submitted! Check Out The HomePage To See Your Contribution")}}>Submit</Form.Button>
      </Form>
    </div>
  );
}



export default CreatePlant;