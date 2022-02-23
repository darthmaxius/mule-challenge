import { render, fireEvent } from '@testing-library/react';
import Textarea from '.';

describe('Button', () => {
  it('Render', () => {
    const { asFragment } = render(<Textarea className="test">Textarea</Textarea>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Click', () => {
    const handler = jest.fn();
    const textarea = render(<Textarea className="test" handlerTextarea={handler} />).getByLabelText('panel-textarea');

    fireEvent.change(textarea, { target: { value: 'a depends b' } });

    expect(handler).toBeCalled();
  });
});
