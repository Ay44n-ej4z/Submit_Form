import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const containerStyle = {
  color: "#000000",
  display: "flex",
  alignItems: "center",
  marginLeft: "120px",
  padding: "150px",
  width: "100%"
};

export default props => {
  return (
    <div style={containerStyle} id="titlebar">
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={props.onShowFormClick}
        title={props.formVisible ? `Hide Form` : `Show Form`}
        disabled={props.formVisible}
      >
        Task
      </Button>
    </div>
  );
};
