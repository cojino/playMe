import "./App.css";
import Form from "./components/Form";
import React, { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [nState, setNState] = useState("");
  const [text, setText] = useState([]);

  return (
    <div className="App">
      <Form
        nState={nState}
        setNState={setNState}
        text={text}
        setText={setText}
      />
      <Todos setText={setText} text={text} />
    </div>
  );
}

export default App;
