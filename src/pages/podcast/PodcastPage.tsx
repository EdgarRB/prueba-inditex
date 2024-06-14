import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Styles from './PodcastPage.module.css';
import { usePodcastDetailApi } from '../../api/usePodcastDetailApi';
import { LoadingContext } from '../../context/LoadingContext';
import PodcastDetail from '../../components/podcastDetail/PodcastDetail';
import { PodcastContext } from '../../context/PodcastContext';
import PodcastTable from '../../components/podcastTable/PodcastTable';

const PodcastPage = () => {
  const { id } = useParams();
  const loadingContext = useContext(LoadingContext);
  const podcastContext = useContext(PodcastContext);

  const { setIsLoading } = loadingContext!;
  const { podcastEntry } = podcastContext!;

  const { status, data, error } = usePodcastDetailApi(id ?? '');

  if (status === 'pending') {
    setIsLoading && setIsLoading(true);
  }
  if (status === 'error') {
    console.error(error.message);
  }

  if (status === 'success') {
    setIsLoading && setIsLoading(false);
    // the api call retrieves 21 results, the first is useless and don't contains any usefull information
    if (data.results.length > 20) {
      data.results.shift();
    }
    return (
      <div className={Styles.container}>
        <div className={Styles.leftSection}>
          <PodcastDetail detail={podcastEntry!} />
        </div>
        <div className={Styles.rightSection}>
          <div className={Styles.episodeCount}>
            <h2>Episodes: {data.resultCount > 20 ? 20 : data.resultCount}</h2>
          </div>
          <div className={Styles.episodeList}>
            <PodcastTable
              podcastId={podcastEntry!.id.attributes['im:id']}
              episodes={data.results}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default PodcastPage;
