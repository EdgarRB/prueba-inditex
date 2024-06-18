import { useQuery } from '@tanstack/react-query';
import FetchFunction from './fetch';
import PodcastDetail from '../model/PodcastDetailModel';

const time = 1000 * 3600 * 24;
const key = 'podcastDetail';
const timeKey = 'podcastDetailExpiration';

export const usePodcastDetailApi = (id: string) => {
  const url = `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode`;

  return useQuery({
    queryKey: ['podcastDetail', id],
    queryFn: async (): Promise<PodcastDetail> => {
      const cachedData = localStorage.getItem(`${key}${id}`);
      const cachedTimestamp = localStorage.getItem(timeKey);

      if (cachedData && cachedTimestamp) {
        const age = Date.now() - parseInt(cachedTimestamp, 10);
        if (age < time) {
          return JSON.parse(cachedData);
        }
      }

      const data = await FetchFunction(url);
      localStorage.setItem(`${key}${id}`, JSON.stringify(data));
      localStorage.setItem(timeKey, Date.now().toString());

      return data;
    },
    gcTime: time,
    staleTime: time,
  });
};
