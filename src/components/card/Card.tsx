import { useNavigate } from 'react-router-dom';
import { Entry } from '../../model/PodcastModel';
import Styles from './Card.module.css';
import { useContext } from 'react';
import { PodcastContext } from '../../context/PodcastContext';

interface ICardProps {
  data: Entry;
}

const Card = ({ data }: ICardProps) => {
  const navigate = useNavigate();
  const podcastContext = useContext(PodcastContext);
  const { setPodcastEntry } = podcastContext!;

  const handleRedirection = () => {
    setPodcastEntry(data);
    navigate(`/podcast/${data.id.attributes['im:id']}`);
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      handleRedirection();
    }
  };

  return (
    <button
      className={Styles.card}
      onClick={handleRedirection}
      onKeyDown={handleKeyPress}
    >
      <img src={data['im:image'][2].label} alt="podcast logo" />
      <div className={Styles.info}>
        <h2>{data['im:name'].label}</h2>
        <p>Author: {data['im:artist'].label}</p>
      </div>
    </button>
  );
};

export default Card;
