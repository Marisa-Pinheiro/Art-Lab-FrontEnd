import { useState } from "react";

import projectsService from '../../../Services/project.services';

function AddIllustration(props) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name: name, price: price, date: date };

      projectsService.createIllustration(requestBody)
      .then(()=>{
        setPrice(0);
        setDate([]);
        props.refreshIllustrations();
      })
      .catch((error)=>console.log(error));
  };

  return (
    <div className="add-illustration">
      <h3>Add Artwork</h3>
        <form onSubmit={handleSubmit} action="/illustrations" method="post" encType="multipart/form-data">
        <p>Author:Alguem? TBD</p>
        <label>Name:</label>
        <input type="text" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Date:</label>
        <input type="number" name="year" className="form-control" value={date} onChange={(e) => setDate(e.target.value)}/>
        <label>Price:</label>
        <input type="number" name="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <input type="file" name="illustration-image" />
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
}

export default AddIllustration;
