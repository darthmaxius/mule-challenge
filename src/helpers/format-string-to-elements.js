/**
 *  Wrapper for data from app to graph lib
 *
 * @param {String} input Origin parent for outputs
 * @param {Array} outputs Sons of input
 * @param {Array} uniqueElements List of unique elements to be compare
 * @param {Numeric} counter Number of graph's renders (App controlled this)
 * @param {Function} setCounter handler to do count of renders (App controlled this)
 * @returns
 */
function formatString2Elements(input, outputs, uniqueElements, counter, setCounter) {
  const newElements = [];

  if (uniqueElements.indexOf(input) === -1) {
    uniqueElements.push(input);

    newElements.push({
      id: `${counter}.e${input}`,
      data: { label: input },
      position: { x: 250, y: 25 },
    });
  }

  outputs.map((output, key) => {
    const position = key * 10;
    const positionX = 100 + position;
    const positionY = 125 + position;

    if (uniqueElements.indexOf(output) === -1) {
      uniqueElements.push(output);

      newElements.push({
        id: `${counter}.e${output}`,
        // you can also pass a React component as a label
        data: { label: output },
        position: { x: positionX, y: positionY },
      });
    }

    newElements.push({
      id: `${counter}.e${input}-e${output}`,
      source: `${counter}.e${input}`,
      target: `${counter}.e${output}`,
      arrowHeadType: 'arrowclosed',
      type: 'step',
    });
  });

  setCounter(counter + 1);

  return newElements;
}

export default formatString2Elements;
