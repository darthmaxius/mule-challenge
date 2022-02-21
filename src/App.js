import React, { useEffect, useState } from "react";
import ReactFlow from "react-flow-renderer";
import TextArea from "./components/textarea";
import Button from "./components/button";

export default function App() {
  const elementsRaw = [
    {
      id: "1",
      type: "input", // input node
      data: { label: "Input Node" },
      position: { x: 250, y: 25 },
    },
    // default node
    {
      id: "2",
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: "3",
      type: "output", // output node
      data: { label: "Output Node" },
      position: { x: 250, y: 250 },
    },
    // animated edge
    { id: "e1-2", source: "1", target: "2", arrowHeadType: "arrowclosed" },
    { id: "e2-3", source: "2", target: "3", arrowHeadType: "arrowclosed" },
  ];

  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(elementsRaw);
  }, []);

  return (
    <div>
      <TextArea hanlderApp={setElements} />
      <Button>Ajustar</Button>
      <div style={{ height: "1000px" }}>
        <ReactFlow elements={elements} />
      </div>
    </div>
  );
}
