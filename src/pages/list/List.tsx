import Styles from './List.module.css';
import { useContext, useEffect, useState } from 'react';
import Search from '../../components/search/Search';
import { usePodcastListApi } from '../../api/usePodcastListApi';
import { Entry } from '../../model/PodcastModel';
import { LoadingContext } from '../../context/LoadingContext';
import Card from '../../components/card/Card';
import NoResult from '../../components/noResult/NoResult';
import HandleStatus from '../../utils/HandleStatus';

const ListPage = () => {
  const loadingContext = useContext(LoadingContext);

  const { setIsLoading } = loadingContext!;
  const { status, data, error } = usePodcastListApi();
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    HandleStatus(status, setIsLoading);
  }, [status, setIsLoading]);

  if (status === 'error') {
    console.error(error.message);
  }

  if (status === 'success') {
    const filteredResults = data.feed.entry.filter(
      (podcast: Entry) =>
        podcast['im:name'].label
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        podcast['im:artist'].label
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    );

    return (
      <div className={Styles.container}>
        <Search
          setSearchQuery={setSearchQuery}
          numOfElements={filteredResults.length}
        />
        {filteredResults.length > 0 ? (
          <div className={Styles.grid}>
            {filteredResults.map((podcasts: Entry) => (
              <Card
                key={`podcast${podcasts.id.attributes['im:id']}`}
                data={podcasts}
              />
            ))}
          </div>
        ) : (
          <NoResult />
        )}
      </div>
    );
  }
};

export default ListPage;
