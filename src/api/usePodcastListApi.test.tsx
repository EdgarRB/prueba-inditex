import { render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePodcastListApi } from './usePodcastListApi';
import FetchFunction from './fetch';
import { localStorageMock, mockPodcastListData } from '../utils/MockData';

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

jest.mock('./fetch', () => jest.fn());

const TestComponent = () => {
  const { data, isSuccess } = usePodcastListApi();

  if (!isSuccess) return <div>Loading...</div>;
  return <div data-testid="podcastData">{JSON.stringify(data)}</div>;
};

describe('usePodcastListApi', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('should fetch and cache podcast data', async () => {
    (FetchFunction as jest.Mock).mockResolvedValue(mockPodcastListData);

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <TestComponent />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(FetchFunction).toHaveBeenCalledWith(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      );
      expect(localStorage.getItem('podcastList')).toBe(
        JSON.stringify(mockPodcastListData)
      );
      expect(localStorage.getItem('podcastListExpiration')).toBeTruthy();
      expect(getByTestId('podcastData')).toHaveTextContent(
        JSON.stringify(mockPodcastListData)
      );
    });
  });

  test('should use cached data if it exists and is not expired', async () => {
    localStorage.setItem('podcastList', JSON.stringify(mockPodcastListData));
    localStorage.setItem('podcastListExpiration', Date.now().toString());

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <TestComponent />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(FetchFunction).not.toHaveBeenCalled();
      expect(getByTestId('podcastData')).toHaveTextContent(
        JSON.stringify(mockPodcastListData)
      );
    });
  });

  test('should fetch new data if cached data is expired', async () => {
    const queryClient2 = new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: 0,
          staleTime: Infinity,
        },
      },
    });

    (FetchFunction as jest.Mock).mockResolvedValue(mockPodcastListData);

    localStorage.setItem('podcastList', JSON.stringify(mockPodcastListData));
    localStorage.setItem('podcastListExpiration', (0).toString());

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient2}>
        <TestComponent />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(FetchFunction).toHaveBeenCalledWith(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      );
      expect(localStorage.getItem('podcastList')).toBe(
        JSON.stringify(mockPodcastListData)
      );
      expect(localStorage.getItem('podcastListExpiration')).toBeTruthy();
      expect(getByTestId('podcastData')).toHaveTextContent(
        JSON.stringify(mockPodcastListData)
      );
    });
  });
});
