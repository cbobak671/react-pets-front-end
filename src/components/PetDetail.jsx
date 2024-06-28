const PetDetail = (props) => {
    if (!props.selected)
        return (
    <div>
        <h2>No Details - Select Pet to See Details</h2>
    </div>
    );

  return (
    <div>
      <h1>{props.selected.name}</h1>
      <h2>Breed: {props.selected.breed}</h2>
      <h2>
        Age: {props.selected.age} year{props.selected.age > 1 ? "s" : ""} old
      </h2>
      <br />
      <button onClick={() => props.handleFormView(props.selected)}>Edit Pet</button>
      <br />
      <br />
      <button onClick={() => props.handleDeletePet(props.selected._id)}>Delete Pet</button>
    </div>
  );
};

export default PetDetail;
