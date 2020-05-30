import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../store/action";
import SmurfForm from "../components/SmurfForm";

const SmurfCard = (props) => {
  const { item, isLoading, deleteSmurf } = props;
  // console.log("item", item);
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) {
    return (
      <>
        <h2>Smurfs are loading</h2>
      </>
    );
  }

  if (isEditing) {
    return <SmurfForm key={item.id} item={item} />;
  }

  return (
    <div>
      <h2>Name: {item.name}</h2>
      <h3>Age: {item.age}</h3>
      <h3>Height: {item.height}</h3>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteSmurf(item.id)}>Delete</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { deleteSmurf })(SmurfCard);
