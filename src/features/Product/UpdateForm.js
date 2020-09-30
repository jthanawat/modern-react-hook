import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [type, setTypes] = useState("");

  const { id } = useParams();
  console.log('id ---> ',id);

  return (
    <>
      <h1>Update Product</h1>
      <form id="create-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={(event) => event.target.value}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input
            name="imageURL"
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(event) => event.target.value}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            id="type"
            value={type}
            onChange={(event) => event.target.value}
          />
        </div>

        <button type="button" className="UpdateForm__delete-button">
          Delete restaurant
        </button>
        <button type="submit">Update product</button>
      </form>
    </>
  );
};

export default UpdateForm;
