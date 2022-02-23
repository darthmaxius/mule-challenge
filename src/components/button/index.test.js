import { render, fireEvent } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  it('Render', () => {
    const { asFragment } = render(<Button className="test">Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Click', () => {
    const handler = jest.fn();
    const button = render(
      <Button className="test" onClickHandler={handler}>
        Button
      </Button>,
    ).getByLabelText('panel-button');

    fireEvent.click(button);

    expect(handler).toBeCalled();
  });
});
