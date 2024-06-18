import { render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePodcastDetailApi } from './usePodcastDetailApi';
import FetchFunction from './fetch';
import { localStorageMock, mockPodcastDetailData } from '../utils/MockData';

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

// Mock FetchFunction
jest.mock('./fetch', () => jest.fn());

interface TestComponentProps {
  id: string;
}

const TestComponent = ({ id }: TestComponentProps) => {
  const { data, isSuccess } = usePodcastDetailApi(id);

  if (!isSuccess) return <div>Loading...</div>;
  return <div data-testid="podcastDetailData">{JSON.stringify(data)}</div>;
};

describe('usePodcastDetailApi', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should fetch and cache podcast detail data', async () => {
    (FetchFunction as jest.Mock).mockResolvedValue(mockPodcastDetailData);

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <TestComponent id="12345" />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(FetchFunction).toHaveBeenCalledWith(
        'https://itunes.apple.com/lookup?id=12345&media=podcast&entity=podcastEpisode'
      );
      expect(localStorage.getItem('podcastDetail')).toBe(
        JSON.stringify(mockPodcastDetailData)
      );
      expect(localStorage.getItem('podcastDetailExpiration')).toBeTruthy();
      expect(getByTestId('podcastDetailData')).toHaveTextContent(
        JSON.stringify(mockPodcastDetailData)
      );
    });
  });

  it('should use cached data if it exists and is not expired', async () => {
    localStorage.setItem(
      'podcastDetail',
      JSON.stringify(mockPodcastDetailData)
    );
    localStorage.setItem('podcastDetailExpiration', Date.now().toString());

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <TestComponent id="12345" />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(FetchFunction).not.toHaveBeenCalled();
      expect(getByTestId('podcastDetailData')).toHaveTextContent(
        JSON.stringify(mockPodcastDetailData)
      );
    });
  });

  it('should fetch new data if cached data is expired', async () => {
    const queryClient2 = new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: 0,
          staleTime: 0,
        },
      },
    });

    localStorage.setItem(
      'podcastDetail',
      JSON.stringify(mockPodcastDetailData)
    );
    localStorage.setItem(
      'podcastDetailExpiration',
      (Date.now() - 1000 * 3600 * 25).toString()
    ); // Set expiration to 25 hours ago

    (FetchFunction as jest.Mock).mockResolvedValue(mockPodcastDetailData);

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient2}>
        <TestComponent id="12345" />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(FetchFunction).toHaveBeenCalledWith(
        'https://itunes.apple.com/lookup?id=12345&media=podcast&entity=podcastEpisode'
      );
      expect(localStorage.getItem('podcastDetail')).toBe(
        JSON.stringify(mockPodcastDetailData)
      );
      expect(localStorage.getItem('podcastDetailExpiration')).toBeTruthy();
      expect(getByTestId('podcastDetailData')).toHaveTextContent(
        JSON.stringify(mockPodcastDetailData)
      );
    });
  });
});
