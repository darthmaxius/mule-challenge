import React from "react";

export default function Textarea({ hanlderApp }) {
  function formatString2Elements(input, outputs) {
    const newElements = [
      {
        id: `e-${input}`,
        // input node
        data: { label: input },
        position: { x: 250, y: 25 },
      },
    ];

    outputs.map((output, key) => {
      const position = key * 10;
      const positionX = 100 + position;
      const positionY = 125 + position;

      newElements.push({
        id: `e-${output}`,
        // you can also pass a React component as a label
        data: { label: output },
        position: { x: positionX, y: positionY },
      });

      newElements.push({
        id: `e-${input}-e-${output}`,
        source: `e-${input}`,
        target: `e-${output}`,
        arrowHeadType: "arrowclosed",
        type: "step",
      });
    });

    return newElements;
  }

  function insertText(e) {
    const text = e.target.value.trim();

    const lines = text.toUpperCase().split("\n");

    const elements = [];

    lines.map((line) => {
      const auxInputOutputs = line.split(" DEPENDS ");
      const auxInput = auxInputOutputs[0].trim().split(" ");
      const auxOutputs = auxInputOutputs[1].trim().split(" ");

      console.log("INPUTS: ", auxInput, auxOutputs);

      if (
        auxInput.length > 1 ||
        auxOutputs.length < 1 ||
        auxOutputs[0] === ""
      ) {
        return console.log(`INVALID LINE TO DRAW "${text}"`);
      }

      console.log(`VALID STRING "${text}"`);
      elements.push(...formatString2Elements(auxInput, auxOutputs));
    });

    console.log(elements)

    hanlderApp(elements);
  }

  return <textarea onChange={insertText} />;
}
