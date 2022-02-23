import { render, fireEvent, screen } from '@testing-library/react';
import App from '.';

jest.mock('react-flow-renderer', () => () => <div />);

describe('Index Test', () => {
  const setup = () => {
    const utils = render(<App />);
    const textarea = utils.getByLabelText('panel-textarea');
    const button = utils.getByLabelText('panel-button');

    return {
      textarea,
      button,
      ...utils,
    };
  };
  it('Happy render', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Change with valid value in textarea and click in Draw', () => {
    const { textarea, button } = setup();
    fireEvent.change(textarea, { target: { value: 'a depends b' } });

    fireEvent.click(button);

    expect(screen.getByText('Summary')).toBeTruthy();
  });

  it('Change with invalid values [THIS LINE ONLY HAVE ONE DEPENDS] in textarea and click in Draw', () => {
    const { textarea, button } = setup();
    fireEvent.change(textarea, { target: { value: 'a b' } });

    expect(textarea.value).toBe('a b');

    fireEvent.click(button);

    expect(screen.getByText('Summary')).toBeTruthy();
  });
  it('Change with invalid values [INVALID LINE TO DRAW] in textarea and click in Draw', () => {
    const { textarea, button } = setup();
    fireEvent.change(textarea, { target: { value: 'depends' } });

    fireEvent.click(button);

    expect(screen.getByText('Summary')).toBeTruthy();
  });
});
