import '@testing-library/jest-dom';
import List from './List';
import { LoadingContext } from '../../context/LoadingContext';
import { usePodcastListApi } from '../../api/usePodcastListApi';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import { PodcastContext } from '../../context/PodcastContext';
import { mockPodcastListData } from '../../utils/MockData';

jest.mock('../../api/usePodcastListApi');

const mockPodcastContext = {
  podcastEntry: null,
  setPodcastEntry: jest.fn(),
};

describe('ListPage', () => {
  let setIsLoadingMock: jest.Mock;

  beforeEach(() => {
    setIsLoadingMock = jest.fn();
  });

  const renderComponent = (status: 'pending' | 'success' | 'error') => {
    (usePodcastListApi as jest.Mock).mockReturnValue({
      status,
      data: status === 'success' ? mockPodcastListData : null,
      error: status === 'error' ? new Error('Error fetching data') : null,
    });

    render(
      <Router>
        <LoadingContext.Provider
          value={{ isLoading: false, setIsLoading: setIsLoadingMock }}
        >
          <PodcastContext.Provider value={mockPodcastContext}>
            <List />
          </PodcastContext.Provider>
        </LoadingContext.Provider>
      </Router>
    );
  };

  test('shows loading state', () => {
    renderComponent('pending');
    expect(setIsLoadingMock).toHaveBeenCalledWith(true);
  });

  test('shows error state', async () => {
    console.error = jest.fn();
    renderComponent('error');
    expect(setIsLoadingMock).toHaveBeenCalledWith(false);
    await waitFor(() =>
      expect(console.error).toHaveBeenCalledWith('Error fetching data')
    );
  });

  test('shows data when API call is successful', async () => {
    renderComponent('success');
    expect(setIsLoadingMock).toHaveBeenCalledWith(false);

    await waitFor(() => {
      expect(screen.getByText('Podcast 1')).toBeInTheDocument();
      expect(screen.getByText('Author: Artist 1')).toBeInTheDocument();
      expect(screen.getByText('Podcast 2')).toBeInTheDocument();
      expect(screen.getByText('Author: Artist 2')).toBeInTheDocument();
    });
  });

  test('shows no result state when search yields no results', async () => {
    renderComponent('success');
    expect(setIsLoadingMock).toHaveBeenCalledWith(false);

    const input = screen.getByTestId('search-podcast');
    fireEvent.change(input, { target: { value: 'nonexistent' } });

    await waitFor(() => {
      expect(
        screen.getByText('No results found, search again or reload the page')
      ).toBeInTheDocument();
    });
  });
});
