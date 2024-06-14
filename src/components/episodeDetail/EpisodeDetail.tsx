import { Result } from '../../model/PodcastDetailModel';

interface EpisodeDetailProps {
  detail: Result;
}

const EpisodeDetail = ({ detail }: EpisodeDetailProps) => {
  return (
    <div className="episode-details">
      <h2>{detail.trackName}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: detail.description ? detail.description : '',
        }}
      ></p>
      <hr />
      <audio controls>
        <source src={detail.trackViewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default EpisodeDetail;
