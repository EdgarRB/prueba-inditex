import { useContext, useEffect } from 'react';
import PodcastDetail from '../../components/podcastDetail/PodcastDetail';
import Styles from './EpisodePage.module.css';
import { PodcastContext } from '../../context/PodcastContext';
import { LoadingContext } from '../../context/LoadingContext';
import { EpisodeContext } from '../../context/EpisodeContext';
import EpisodeDetail from '../../components/episodeDetail/EpisodeDetail';

const EpisodePage = () => {
  const loadingContext = useContext(LoadingContext);
  const podcastContext = useContext(PodcastContext);
  const episodeContext = useContext(EpisodeContext);

  const { setIsLoading } = loadingContext!;

  const { podcastEntry } = podcastContext!;
  const { episodeResult } = episodeContext!;

  useEffect(() => {
    setIsLoading(true);
    if (podcastEntry && episodeResult) {
      setIsLoading(false);
    }
  }, [podcastEntry, episodeResult, setIsLoading]);

  return (
    <div className={Styles.container}>
      <div className={Styles.leftSection}>
        {podcastEntry && <PodcastDetail detail={podcastEntry} />}
      </div>
      <div className={Styles.rightSection}>
        {episodeResult && <EpisodeDetail detail={episodeResult} />}
      </div>
    </div>
  );
};

export default EpisodePage;
