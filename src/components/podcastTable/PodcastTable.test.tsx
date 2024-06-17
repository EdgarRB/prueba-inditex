import { render, fireEvent } from '@testing-library/react';
import PodcastTable from './PodcastTable';
import { EpisodeContext } from '../../context/EpisodeContext';
import { mockEpisodes } from '../../utils/MockData';
import { BrowserRouter as Router } from 'react-router-dom';

const mockEpisodeContext = {
  episodeResult: null,
  setEpisodeResult: jest.fn(),
};

describe('PodcastTable component', () => {
  test('should render episodes correctly', () => {
    const { getByText } = render(
      <Router>
        <EpisodeContext.Provider value={mockEpisodeContext}>
          <PodcastTable podcastId="123" episodes={mockEpisodes} />
        </EpisodeContext.Provider>
      </Router>
    );

    mockEpisodes.forEach((episode) => {
      const episodeTitle = getByText(episode.trackName);
      expect(episodeTitle).toBeInTheDocument();
    });
  });

  test('should call setEpisodeResult and navigate when clicking on an episode', () => {
    const { getByText } = render(
      <Router>
        <EpisodeContext.Provider value={mockEpisodeContext}>
          <PodcastTable podcastId="123" episodes={mockEpisodes} />
        </EpisodeContext.Provider>
      </Router>
    );

    const episodeLink = getByText('Episode 1');
    fireEvent.click(episodeLink);

    expect(mockEpisodeContext.setEpisodeResult).toHaveBeenCalledWith(
      mockEpisodes[1]
    );
  });

  test('should call setEpisodeResult and navigate when pressing Enter on an episode', () => {
    const { getByText } = render(
      <Router>
        <EpisodeContext.Provider value={mockEpisodeContext}>
          <PodcastTable podcastId="123" episodes={mockEpisodes} />
        </EpisodeContext.Provider>
      </Router>
    );

    const episodeLink = getByText('Episode 2');
    fireEvent.keyDown(episodeLink, { key: 'Enter', code: 'Enter' });

    expect(mockEpisodeContext.setEpisodeResult).toHaveBeenCalledWith(
      mockEpisodes[2]
    );
  });

  test('should call setEpisodeResult and navigate when pressing Space on an episode', () => {
    const { getByText } = render(
      <Router>
        <EpisodeContext.Provider value={mockEpisodeContext}>
          <PodcastTable podcastId="123" episodes={mockEpisodes} />
        </EpisodeContext.Provider>
      </Router>
    );

    const episodeLink = getByText('Episode 2');
    fireEvent.keyDown(episodeLink, { key: ' ', code: 'Space' });

    expect(mockEpisodeContext.setEpisodeResult).toHaveBeenCalledWith(
      mockEpisodes[2]
    );
  });
});
