import React from "react";
import { Data } from "./app/data";
import Renderer from "./components/maincomponent";

function App() {
  return (
    <div className="App">
      <Renderer data={Data.data["b3f4ed02-a585-41b6-9469-df703d3661c5"]} />
    </div>
  );
}

export default App;
