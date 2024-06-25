import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Styles from './PodcastPage.module.css';
import { usePodcastDetailApi } from '../../api/usePodcastDetailApi';
import { LoadingContext } from '../../context/LoadingContext';
import PodcastDetail from '../../components/podcastDetail/PodcastDetail';
import { PodcastContext } from '../../context/PodcastContext';
import PodcastTable from '../../components/podcastTable/PodcastTable';
import { usePodcastListApi } from '../../api/usePodcastListApi';
import { Entry } from '../../model/PodcastModel';
import HandleStatus from '../../utils/HandleStatus';

const PodcastPage = () => {
  const { id } = useParams();
  const loadingContext = useContext(LoadingContext);
  const podcastContext = useContext(PodcastContext);

  const { setIsLoading } = loadingContext!;
  const { podcastEntry, setPodcastEntry } = podcastContext!;
  const { data: podcastData } = usePodcastListApi();
  const { status, data, error } = usePodcastDetailApi(id ?? '');

  useEffect(() => {
    HandleStatus(status, setIsLoading);
  }, [status, setIsLoading]);

  useEffect(() => {
    // in case the user refresh the page and the context is lost
    if (!podcastEntry && id) {
      if (podcastData?.feed.entry) {
        const entry = podcastData.feed.entry.find(
          (podcast: Entry) => podcast.id.attributes['im:id'] === id
        );
        if (entry) {
          setPodcastEntry(entry);
        }
      }
    }
  }, [id, podcastData, podcastEntry, setPodcastEntry]);

  if (status === 'error') {
    console.error(error.message);
  }

  if (status === 'success' && podcastEntry) {
    const episodes = [...data.results];

    // the first element retrieved is useless and don't contains any usefull information
    if (data.results.length > 1) {
      episodes.shift();
    }

    return (
      <div className={Styles.container}>
        <PodcastDetail detail={podcastEntry} />

        <div className={Styles.rightSection}>
          <div className={Styles.episodeCount}>
            <h2>Episodes: {episodes.length}</h2>
          </div>
          <div className={Styles.episodeList}>
            <PodcastTable
              podcastId={podcastEntry.id.attributes['im:id']}
              episodes={episodes}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default PodcastPage;
