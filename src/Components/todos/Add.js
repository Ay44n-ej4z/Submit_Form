import React, { Component } from "react";
import AddTodo from "./AddTodo";

const style = {
  backgroundColor: "rgb(93,93,93)",
  color: "#ccc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  padding: "0em 1em"
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {

      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {},
     
    };
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
  
  }
  handleShowFormClick() {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }
  handleFormCancel() {
    this.setState({
      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {}
    });
  }
  render() {
    return (
      <div id={this.props.id} style={style}>
        <ControlForm
          onShowFormClick={this.handleShowFormClick}
          formVisible={this.state.formVisible}
        />
        {this.state.formVisible ? (
          <AddTodo
            formVisible={this.state.formVisible}
            formTitle="Schedule an Event"
            onFormCancel={this.handleFormCancel}
            onFormSubmit={this.handleFormSubmit}
            selectedEvent={this.state.selectedEvent}
            hasSelectedEvent={this.state.hasSelectedEvent}
          />
        ) : null}
       
      </div>
    );
  }
}

export default Container;
