import React from "react";
import db from "./firebaseConfig";

class App extends React.Component {
  state = {
    email: "",
    name: "",
  };

  UpdateUser = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  firestoreHandler = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      name: "",
    });

    db.collection("users").add({
      email: this.state.email,
      name: this.state.name,
    });
  };

  render() {
    return (
      <form onSubmit={this.firestoreHandler}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.UpdateUser}
        />
        <br />
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.UpdateUser}
        />
        <br />
        <button name="Submit">submit</button>
      </form>
    );
  }
}

export default App;
