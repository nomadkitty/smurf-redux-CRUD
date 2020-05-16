import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../store/action";

const SmurfForm = (props) => {
  const { addSmurf, isLoading } = props;
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });

  const handleChange = (e) => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    // console.log("change", newSmurf);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSmurf(newSmurf);
    setNewSmurf({ name: "", age: "", height: "" });
  };

  if (isLoading) {
    return (
      <>
        <h2>Adding smurf...</h2>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Smurf Here</h2>
      <input
        type="text"
        name="name"
        placeholder="Smurf Name"
        value={newSmurf.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Smurf Age"
        value={newSmurf.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="height"
        placeholder="Smurf Height"
        value={newSmurf.height}
        onChange={handleChange}
      />
      <button type="submit">Add Smurf</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { addSmurf })(SmurfForm);
