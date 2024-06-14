import Styles from './List.module.css';
import { useContext, useState } from 'react';
import Search from '../../components/search/Search';
import { usePodcastListApi } from '../../api/usePodcastListApi';
import { Entry } from '../../model/PodcastModel';
import { LoadingContext } from '../../context/LoadingContext';
import Card from '../../components/card/Card';
import NoResult from '../../components/noResult/NoResult';

const ListPage = () => {
  const loadingContext = useContext(LoadingContext);

  // We expect that loadingContext is not undefined
  const { setIsLoading } = loadingContext!;
  const { status, data, error } = usePodcastListApi();

  const [searchQuery, setSearchQuery] = useState<string>('');

  if (status === 'pending') {
    setIsLoading && setIsLoading(true);
  }
  if (status === 'error') {
    console.error(error.message);
  }

  if (status === 'success') {
    setIsLoading && setIsLoading(false);
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
