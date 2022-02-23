import formatString2Elements from './format-string-to-elements';

describe('Helpers', () => {
  it('A DEPENDS B C D in new execution', () => {
    const counter = jest.fn();

    const result = formatString2Elements('A', ['B', 'C', 'D'], [], 0, counter);
    expect(result).toMatchObject([
      { id: '0.eA', data: { label: 'A' }, position: { x: 250, y: 25 } },
      { id: '0.eB', data: { label: 'B' }, position: { x: 100, y: 125 } },
      {
        id: '0.eA-eB',
        source: '0.eA',
        target: '0.eB',
        arrowHeadType: 'arrowclosed',
        type: 'step',
      },
      { id: '0.eC', data: { label: 'C' }, position: { x: 110, y: 135 } },
      {
        id: '0.eA-eC',
        source: '0.eA',
        target: '0.eC',
        arrowHeadType: 'arrowclosed',
        type: 'step',
      },
      { id: '0.eD', data: { label: 'D' }, position: { x: 120, y: 145 } },
      {
        id: '0.eA-eD',
        source: '0.eA',
        target: '0.eD',
        arrowHeadType: 'arrowclosed',
        type: 'step',
      },
    ]);
  });

  it('B DEPENDS E F G with previous data', () => {
    const counter = jest.fn();

    const result = formatString2Elements('B', ['E', 'F', 'G'], ['B', 'C', 'D'], 0, counter);

    expect(result).toMatchObject([
      { id: '0.eE', data: { label: 'E' }, position: { x: 100, y: 125 } },
      {
        id: '0.eB-eE',
        source: '0.eB',
        target: '0.eE',
        arrowHeadType: 'arrowclosed',
        type: 'step',
      },
      { id: '0.eF', data: { label: 'F' }, position: { x: 110, y: 135 } },
      {
        id: '0.eB-eF',
        source: '0.eB',
        target: '0.eF',
        arrowHeadType: 'arrowclosed',
        type: 'step',
      },
      { id: '0.eG', data: { label: 'G' }, position: { x: 120, y: 145 } },
      {
        id: '0.eB-eG',
        source: '0.eB',
        target: '0.eG',
        arrowHeadType: 'arrowclosed',
        type: 'step',
      },
    ]);
  });

  it('H DEPENDS E F G with previous data', () => {
    const counter = jest.fn();

    const result = formatString2Elements('H', ['E', 'F', 'G'], ['B', 'C', 'D', 'E', 'F', 'G'], 0, counter);

    expect(result).toMatchObject([
      { id: '0.eH', data: { label: 'H' }, position: { x: 250, y: 25 } },
      {
        id: '0.eH-eE',
        source: '0.eH',
        target: '0.eE',
        arrowHeadType: 'arrowclosed',
        type: 'step',
      },
      {
        id: '0.eH-eF',
        source: '0.eH',
        target: '0.eF',
        arrowHeadType: 'arrowclosed',
        type: 'step',
      },
      {
        id: '0.eH-eG',
        source: '0.eH',
        target: '0.eG',
        arrowHeadType: 'arrowclosed',
        type: 'step',
      },
    ]);
  });
});
