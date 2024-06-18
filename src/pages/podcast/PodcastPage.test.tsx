import '@testing-library/jest-dom';
import PodcastPage from './PodcastPage';
import { LoadingContext } from '../../context/LoadingContext';
import { PodcastContext } from '../../context/PodcastContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { usePodcastDetailApi } from '../../api/usePodcastDetailApi';
import { usePodcastListApi } from '../../api/usePodcastListApi';
import {
  mockPodcast,
  mockPodcastDetailData,
  mockPodcastListData,
} from '../../utils/MockData';
import { EpisodeContext } from '../../context/EpisodeContext';

jest.mock('../../api/usePodcastDetailApi');
jest.mock('../../api/usePodcastListApi');

const mockPodcastContext = {
  podcastEntry: mockPodcast,
  setPodcastEntry: jest.fn(),
};

describe('PodcastPage', () => {
  let setIsLoadingMock: jest.Mock;

  beforeEach(() => {
    setIsLoadingMock = jest.fn();
  });

  const renderComponent = (status: 'pending' | 'success' | 'error') => {
    (usePodcastDetailApi as jest.Mock).mockReturnValue({
      status,
      data: status === 'success' ? mockPodcastDetailData : null,
      error: status === 'error' ? new Error('Error fetching data') : null,
    });

    (usePodcastListApi as jest.Mock).mockReturnValue({
      data: mockPodcastListData,
    });

    render(
      <Router>
        <LoadingContext.Provider
          value={{ isLoading: false, setIsLoading: setIsLoadingMock }}
        >
          <PodcastContext.Provider value={mockPodcastContext}>
            <EpisodeContext.Provider
              value={{ episodeResult: null, setEpisodeResult: jest.fn() }}
            >
              <PodcastPage />
            </EpisodeContext.Provider>
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

  test('shows podcast details and episodes when data is loaded', async () => {
    renderComponent('success');
    expect(setIsLoadingMock).toHaveBeenCalledWith(false);

    await waitFor(() => {
      expect(screen.getByText('Episodes: 2')).toBeInTheDocument();
      expect(screen.getByText('Episode 1')).toBeInTheDocument();
      expect(screen.getByText('Episode 2')).toBeInTheDocument();
    });
  });
});
