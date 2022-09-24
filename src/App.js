import React from "react";
import Photo from "./Component/ProfilePhoto"
import Name from "./Component/FullName"
import Adress from "./Component/Adress"


function App() {
  return (
    <div className="App">
      <Name />
      <Adress />
      <Photo />
    </div>
  );
}

export default App;
