import Styles from './PodcastTable.module.css';
import { Result } from '../../model/PodcastDetailModel';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { EpisodeContext } from '../../context/EpisodeContext';

interface PodcastTableProps {
  podcastId: string;
  episodes: Result[];
}

const formatDuration = (millis: number) => {
  if (millis) {
    const seconds = Math.floor((millis / 1000) % 60);
    const minutes = Math.floor((millis / (1000 * 60)) % 60);
    const hours = Math.floor((millis / (1000 * 60 * 60)) % 24);

    const hoursString = hours > 1 ? `${hours}h` : '';
    const minutesString = minutes > 1 ? `${minutes}m` : '';

    return `${hoursString} ${minutesString} ${seconds}s`;
  }
  return 'no information';
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};

const PodcastTable = ({ podcastId, episodes }: PodcastTableProps) => {
  const episodeContext = useContext(EpisodeContext);
  const { setEpisodeResult } = episodeContext!;

  const navigate = useNavigate();

  const navigateToEpisode = (podcastId: string, episode: Result) => {
    setEpisodeResult(episode);
    navigate(`/podcast/${podcastId}/episode/${episode.trackId}`);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    podcastId: string,
    episode: Result
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigateToEpisode(podcastId, episode);
    }
  };

  return (
    <div className={Styles.podcastTable}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr key={episode.trackId}>
              <td>
                <div
                  role="button"
                  className={Styles.episodeLink}
                  onClick={() => navigateToEpisode(podcastId, episode)}
                  onKeyDown={(e) => handleKeyDown(e, podcastId, episode)}
                >
                  {episode.trackName}
                </div>
              </td>
              <td>{formatDate(episode.releaseDate)}</td>
              <td>{formatDuration(episode.trackTimeMillis)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PodcastTable;
