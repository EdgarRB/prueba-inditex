import { useContext, useEffect } from 'react';
import PodcastDetail from '../../components/podcastDetail/PodcastDetail';
import Styles from './EpisodePage.module.css';
import { PodcastContext } from '../../context/PodcastContext';
import { LoadingContext } from '../../context/LoadingContext';
import { EpisodeContext } from '../../context/EpisodeContext';
import EpisodeDetail from '../../components/episodeDetail/EpisodeDetail';
import { usePodcastListApi } from '../../api/usePodcastListApi';
import { usePodcastDetailApi } from '../../api/usePodcastDetailApi';
import { useParams } from 'react-router-dom';
import { Entry } from '../../model/PodcastModel';
import { Result } from '../../model/PodcastDetailModel';

const EpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const loadingContext = useContext(LoadingContext);
  const podcastContext = useContext(PodcastContext);
  const episodeContext = useContext(EpisodeContext);

  const { setIsLoading } = loadingContext!;

  const { podcastEntry, setPodcastEntry } = podcastContext!;
  const { episodeResult, setEpisodeResult } = episodeContext!;

  const { data: podcastData } = usePodcastListApi();
  const { data: episodeData } = usePodcastDetailApi(podcastId ?? '');

  useEffect(() => {
    // in case the user refresh the page and the context is lost
    if (!podcastEntry && !episodeResult && podcastId && episodeId) {
      if (podcastData?.feed.entry) {
        const entry = podcastData.feed.entry.find(
          (podcast: Entry) => podcast.id.attributes['im:id'] === podcastId
        );
        if (entry) {
          setPodcastEntry(entry);
        }
      }
      if (episodeData?.results) {
        const result = episodeData?.results.find(
          (episode: Result) => episode.trackId.toString() === episodeId
        );
        if (result) {
          setEpisodeResult(result);
        }
      }
    }
  }, [
    podcastEntry,
    episodeResult,
    setIsLoading,
    podcastId,
    episodeId,
    podcastData,
    episodeData,
    setPodcastEntry,
    setEpisodeResult,
  ]);

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
