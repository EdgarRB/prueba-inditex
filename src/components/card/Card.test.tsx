import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './Card';
import { PodcastContext } from '../../context/PodcastContext';
import { mockPodcast } from '../../utils/MockData';

// Mock PodcastContext
const mockPodcastContext = {
  podcastEntry: mockPodcast,
  setPodcastEntry: jest.fn(),
};

describe('Card component', () => {
  test('should render card with correct data', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <PodcastContext.Provider value={mockPodcastContext}>
          <Card data={mockPodcast} />
        </PodcastContext.Provider>
      </Router>
    );

    const podcastNameElement = getByText('Podcast 1');
    const artistElement = getByText('Author: Artist 1');
    const imageElement = getByAltText('podcast logo');

    expect(podcastNameElement).toBeInTheDocument();
    expect(artistElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  test('should navigate to the correct podcast page when clicked', () => {
    const { getByRole } = render(
      <Router>
        <PodcastContext.Provider value={mockPodcastContext}>
          <Card data={mockPodcast} />
        </PodcastContext.Provider>
      </Router>
    );

    const cardButton = getByRole('button');

    fireEvent.click(cardButton);

    expect(mockPodcastContext.setPodcastEntry).toHaveBeenCalledWith(
      mockPodcast
    );
    expect(window.location.pathname).toBe('/podcast/1');
  });

  test('should navigate to the correct podcast page when Enter key is pressed', () => {
    const { getByRole } = render(
      <Router>
        <PodcastContext.Provider value={mockPodcastContext}>
          <Card data={mockPodcast} />
        </PodcastContext.Provider>
      </Router>
    );

    const cardButton = getByRole('button');

    fireEvent.keyDown(cardButton, { key: 'Enter', code: 'Enter' });

    expect(mockPodcastContext.setPodcastEntry).toHaveBeenCalledWith(
      mockPodcast
    );
    expect(window.location.pathname).toBe('/podcast/1');
  });

  test('should navigate to the correct podcast page when Space key is pressed', () => {
    const { getByRole } = render(
      <Router>
        <PodcastContext.Provider value={mockPodcastContext}>
          <Card data={mockPodcast} />
        </PodcastContext.Provider>
      </Router>
    );

    const cardButton = getByRole('button');

    fireEvent.keyDown(cardButton, { key: ' ', code: 'Space' });

    expect(mockPodcastContext.setPodcastEntry).toHaveBeenCalledWith(
      mockPodcast
    );
    expect(window.location.pathname).toBe('/podcast/1');
  });
});
