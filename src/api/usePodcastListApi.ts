import { useQuery } from '@tanstack/react-query';
import FetchFunction from './fetch';
import Podcast from '../model/PodcastModel';

const url =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

const time = 1000 * 3600 * 24;
const key = 'podcastList';
const timeKey = 'podcastListExpiration';

export const usePodcastListApi = () => {
  return useQuery({
    queryKey: ['podcastList'],
    queryFn: async (): Promise<Podcast> => {
      const cachedData = localStorage.getItem(key);
      const cachedTimestamp = localStorage.getItem(timeKey);

      if (cachedData && cachedTimestamp) {
        const age = Date.now() - parseInt(cachedTimestamp, 10);
        if (age < time) {
          return JSON.parse(cachedData);
        } else {
          localStorage.removeItem(key);
          localStorage.removeItem(timeKey);
        }
      }

      const data = await FetchFunction(url);
      localStorage.setItem(key, JSON.stringify(data));
      localStorage.setItem(timeKey, Date.now().toString());

      return data;
    },
    gcTime: time,
    staleTime: time,
  });
};
