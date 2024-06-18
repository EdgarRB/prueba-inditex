import { render, waitFor } from '@testing-library/react';
import EpisodeDetail from './EpisodeDetail';
import { mockEpisode } from '../../utils/MockData';

describe('EpisodeDetail component', () => {
  test('should render episode details correctly', async () => {
    const { getByText, getByTestId } = render(
      <EpisodeDetail detail={mockEpisode} />
    );

    expect(getByText('Episode 1')).toBeInTheDocument();

    const formattedDescription = getByTestId('description');
    expect(formattedDescription).toBeInTheDocument();
    expect(formattedDescription.innerHTML).toContain(
      '<p>Description of Episode 1</p>'
    );

    const audioElement = await waitFor(() => getByTestId('audio'));

    expect(audioElement).toBeInTheDocument();
  });
});
