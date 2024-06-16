import Styles from './PodcastDetail.module.css';
import { Entry } from '../../model/PodcastModel';
import { useNavigate } from 'react-router-dom';

interface PodcastDetailProps {
  detail: Entry;
}

const PodcastDetail = ({ detail }: PodcastDetailProps) => {
  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate(`/podcast/${detail.id.attributes['im:id']}`);
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      handleRedirection();
    }
  };

  return (
    <div className={Styles.leftSection}>
      <div className={Styles.podcastDetail}>
        <div className={Styles.podcastCard}>
          <div className={Styles.podcastImage}>
            <img
              className={Styles.pointer}
              src={detail['im:image'][2].label}
              alt={detail['im:name'].label}
              onClick={handleRedirection}
              onKeyDown={handleKeyPress}
            />
          </div>
          <hr />
          <h2
            className={Styles.pointer}
            onClick={handleRedirection}
            onKeyDown={handleKeyPress}
          >
            {detail['im:name'].label}
          </h2>
          <p
            className={Styles.pointer}
            onClick={handleRedirection}
            onKeyDown={handleKeyPress}
          >
            by {detail['im:artist'].label}
          </p>
          <hr />
          <h2>Description: </h2>
          <p>{detail.summary.label}</p>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;
