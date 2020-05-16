import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../store/action";

const SmurfCard = (props) => {
  const { item, isLoading, deleteSmurf } = props;
  // console.log("item", item);

  if (isLoading) {
    return (
      <>
        <h2>Smurfs are loading</h2>
      </>
    );
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <h3>{item.age}</h3>
      <h3>{item.height}</h3>
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
