import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { LoadingContext } from '../../context/LoadingContext';

describe('Header component', () => {
  let setIsLoadingMock: jest.Mock;

  beforeEach(() => {
    setIsLoadingMock = jest.fn();
  });

  test('should render the header with a link to the homepage', () => {
    const { getByText } = render(
      <MemoryRouter>
        <LoadingContext.Provider
          value={{ isLoading: false, setIsLoading: setIsLoadingMock }}
        >
          <Header />
        </LoadingContext.Provider>
      </MemoryRouter>
    );

    const linkElement = getByText('Podcaster');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '/');
  });

  test('should display loader when isLoading is true', () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <LoadingContext.Provider
          value={{ isLoading: true, setIsLoading: setIsLoadingMock }}
        >
          <Header />
        </LoadingContext.Provider>
      </MemoryRouter>
    );

    const loaderElement = queryByTestId(`loader`);
    expect(loaderElement).toBeInTheDocument();
  });

  test('should not display loader when isLoading is false', () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <LoadingContext.Provider
          value={{ isLoading: false, setIsLoading: setIsLoadingMock }}
        >
          <Header />
        </LoadingContext.Provider>
      </MemoryRouter>
    );

    const loaderElement = queryByTestId('loader');
    expect(loaderElement).not.toBeInTheDocument();
  });
});
