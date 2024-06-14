import { useQuery } from '@tanstack/react-query';
import FetchFunction from './fetch';
import Podcast from '../model/PodcastModel';

const url =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

const time = 1000 * 3600 * 24;

export const usePodcastListApi = () => {
  return useQuery({
    queryKey: ['podcastList'],
    queryFn: async (): Promise<Podcast> => FetchFunction(url),
    gcTime: time,
    staleTime: time,
  });
};
