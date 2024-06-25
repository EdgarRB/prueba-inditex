import { Result } from '../../model/PodcastDetailModel';
import FormatDescription from '../../utils/DescriptionFormatter';
import Styles from './EpisodeDetail.module.css';

interface EpisodeDetailProps {
  detail: Result;
}

const EpisodeDetail = ({ detail }: EpisodeDetailProps) => {
  return (
    <div className={Styles.episodeDetail}>
      <h2>{detail.trackName}</h2>
      <p
        data-testid="description"
        dangerouslySetInnerHTML={{
          __html: detail.description
            ? FormatDescription(detail.description)
            : '',
        }}
      ></p>
      <hr />
      <audio controls className={Styles.audioPlay} data-testid="audio">
        <source src={detail.episodeUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default EpisodeDetail;
