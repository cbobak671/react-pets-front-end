import { useState } from "react";

const PetForm = (props) => {
  const initialState = {
    name: "",
    age: "",
    breed: "",
  };
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.selected) {
      props.handleUpdatePet(formData, props.selected._id);
    } else {
      props.handleAddPet(formData);
    }
    setFormData(initialState);
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name: </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="age"> Age: </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="breed"> Breed: </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">
          {" "}
          {props.selected ? "Update Pet" : "Add New Pet"}
        </button>
      </form>
    </div>
  );
};

export default PetForm;