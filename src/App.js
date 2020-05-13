import React from "react";
import db from "./firebaseConfig";

function App() {
  const firestoreHandler = () => {
    db.collection("users")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      <input type="file" name="assignments" />
      <button
        className="btn btn-primary"
        name="Submit"
        onchange={firestoreHandler}
      >
        submit
      </button>
    </div>
  );
}

export default App;
