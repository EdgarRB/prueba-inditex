import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PodcastDetail from './PodcastDetail';
import { mockPodcast } from '../../utils/MockData';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('PodcastDetail component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render podcast details correctly', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <PodcastDetail detail={mockPodcast} />
      </Router>
    );

    expect(getByAltText('Podcast 1')).toBeInTheDocument();
    expect(getByText('Podcast 1')).toBeInTheDocument();
    expect(getByText('by Artist 1')).toBeInTheDocument();
    expect(getByText('Description:')).toBeInTheDocument();
  });

  test('should navigate to the correct podcast page when clicked', () => {
    const { getByAltText, getByText } = render(
      <Router>
        <PodcastDetail detail={mockPodcast} />
      </Router>
    );

    const image = getByAltText('Podcast 1');
    const title = getByText('Podcast 1');
    const artist = getByText('by Artist 1');

    fireEvent.click(image);
    expect(mockNavigate).toHaveBeenCalledWith('/podcast/1');

    fireEvent.click(title);
    expect(mockNavigate).toHaveBeenCalledWith('/podcast/1');

    fireEvent.click(artist);
    expect(mockNavigate).toHaveBeenCalledWith('/podcast/1');
  });

  test('should navigate to the correct podcast page when key pressed', () => {
    const { getByAltText, getByText } = render(
      <Router>
        <PodcastDetail detail={mockPodcast} />
      </Router>
    );

    const image = getByAltText('Podcast 1');
    const title = getByText('Podcast 1');
    const artist = getByText('by Artist 1');

    fireEvent.keyDown(image, { key: 'Enter' });
    expect(mockNavigate).toHaveBeenCalledWith('/podcast/1');

    fireEvent.keyDown(title, { key: 'Enter' });
    expect(mockNavigate).toHaveBeenCalledWith('/podcast/1');

    fireEvent.keyDown(artist, { key: 'Enter' });
    expect(mockNavigate).toHaveBeenCalledWith('/podcast/1');
  });
});
