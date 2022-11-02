import React from "react";
import { Data } from "./app/data";
import Renderer from "./components/maincomponent";
import { useState } from "react";
import "./App.css";
function App() {
  const [siteData, setSiteData] = useState(Data);
  const [error, setError] = useState(null);
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "200px",
          color: "red",
          fontSize: "40px",
        }}
      >
        {error}
      </div>

      <Renderer
        data={siteData.data["b3f4ed02-a585-41b6-9469-df703d3661c5"]}
        siteData={siteData}
      />
      <div>
        <textarea
          value={JSON.stringify(siteData, null, 2)}
          onChange={(e) => {
            try {
              let data = JSON.parse(e.target.value);
              setSiteData(data);
            } catch (error) {
              setError("This is not a valid JSON");
              setTimeout(() => {
                setError(null);
              }, 3000);
            }
          }}
          style={{ height: "951px", width: "763px" }}
        />
      </div>
    </div>
  );
}

export default App;
