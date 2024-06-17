import { render } from '@testing-library/react';
import NoResult from './NoResult';

describe('NoResult component', () => {
  it('renders with correct styles', () => {
    const { getByText, getByTestId } = render(<NoResult />);

    const containerElement = getByTestId('no-result-container');
    expect(containerElement).toBeInTheDocument();

    const textElement = getByText(
      'No results found, search again or reload the page'
    );
    expect(textElement).toBeInTheDocument();
  });
});
