import { render, fireEvent, waitFor } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  test('should update tempValue on input change', () => {
    const setSearchQueryMock = jest.fn();
    const { getByTestId } = render(
      <Search setSearchQuery={setSearchQueryMock} numOfElements={0} />
    );

    const input = getByTestId('search-podcast');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input).toHaveValue('test');
  });

  test('should call setSearchQuery after 500ms timeout', async () => {
    jest.useFakeTimers();
    const setSearchQueryMock = jest.fn();
    const { getByTestId } = render(
      <Search setSearchQuery={setSearchQueryMock} numOfElements={0} />
    );

    const input = getByTestId('search-podcast');
    fireEvent.change(input, { target: { value: 'test' } });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(setSearchQueryMock).toHaveBeenCalledWith('test');
    });
  });

  test('should render numOfElements correctly', () => {
    const setSearchQueryMock = jest.fn();
    const { getByText } = render(
      <Search setSearchQuery={setSearchQueryMock} numOfElements={5} />
    );

    const numOfElementsText = getByText('5');
    expect(numOfElementsText).toBeInTheDocument();
  });
});
