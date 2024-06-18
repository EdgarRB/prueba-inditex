import { Result } from '../../model/PodcastDetailModel';
import Styles from './EpisodeDetail.module.css';

interface EpisodeDetailProps {
  detail: Result;
}

const EpisodeDetail = ({ detail }: EpisodeDetailProps) => {
  const formatDescription = (description: string) => {
    const urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]|(\b[\w.-]*\.(com|net|fm)\b[\w/-]*))/gi;

    const descriptionAdapted = description.replace(urlRegex, (url) => {
      const href = url.startsWith('http') ? url : `http://${url}`;
      return `<a href="${href}" target="_blank" class="text-blue-700">${url}</a>`;
    });

    return descriptionAdapted
      .split(/\\n\\n|\\n|\n/)
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join('');
  };

  return (
    <div className={Styles.episodeDetail}>
      <h2>{detail.trackName}</h2>
      <p
        data-testid="description"
        dangerouslySetInnerHTML={{
          __html: detail.description
            ? formatDescription(detail.description)
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
