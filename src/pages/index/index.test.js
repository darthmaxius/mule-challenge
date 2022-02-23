import { render } from '@testing-library/react';
import App from '.';

jest.mock('react-flow-renderer', () => () => <div />);

describe('Index Test', () => {
  it('Happy render', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
