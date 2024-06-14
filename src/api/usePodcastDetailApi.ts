import { useQuery } from '@tanstack/react-query';
import FetchFunction from './fetch';
import PodcastDetail from '../model/PodcastDetailModel';

const time = 1000 * 3600 * 24;

export const usePodcastDetailApi = (id: string) => {
  const url = `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`;

  return useQuery({
    queryKey: ['podcastDetail', id],
    queryFn: async (): Promise<PodcastDetail> => FetchFunction(url),
    gcTime: time,
    staleTime: time,
  });
};
