import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EpisodePage from './EpisodePage';
import { LoadingContext } from '../../context/LoadingContext';
import { PodcastContext } from '../../context/PodcastContext';
import { EpisodeContext } from '../../context/EpisodeContext';
import { usePodcastListApi } from '../../api/usePodcastListApi';
import { usePodcastDetailApi } from '../../api/usePodcastDetailApi';
import {
  mockEpisode,
  mockPodcast,
  mockPodcastDetailData,
  mockPodcastListData,
} from '../../utils/MockData';

jest.mock('../../api/usePodcastDetailApi');
jest.mock('../../api/usePodcastListApi');

const mockPodcastContext = {
  podcastEntry: mockPodcast,
  setPodcastEntry: jest.fn(),
};

const mockEpisodeContext = {
  episodeResult: mockEpisode,
  setEpisodeResult: jest.fn(),
};

describe('EpisodePage', () => {
  let setIsLoadingMock: jest.Mock;

  beforeEach(() => {
    setIsLoadingMock = jest.fn();
  });

  const renderComponent = () => {
    (usePodcastDetailApi as jest.Mock).mockReturnValue({
      data: mockPodcastDetailData,
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
            <EpisodeContext.Provider value={mockEpisodeContext}>
              <EpisodePage />
            </EpisodeContext.Provider>
          </PodcastContext.Provider>
        </LoadingContext.Provider>
      </Router>
    );
  };

  it('should render episode page correctly', async () => {
    renderComponent();
    await waitFor(() => {
      const podcastDetail = screen.getByText('Podcast 1');
      expect(podcastDetail).toBeInTheDocument();

      const episodeDetail = screen.getByText('Episode 1');
      expect(episodeDetail).toBeInTheDocument();

      const audioElement = screen.getByTestId('audio') as HTMLAudioElement;
      expect(audioElement).toBeInTheDocument();
    });
  });
});
