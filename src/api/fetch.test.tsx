import FetchFunction from './fetch';

describe('fetch', () => {
  it('should fetch data successfully', async () => {
    const mockData = {
      contents: '{"key": "value"}',
    };

    // Mock fetch
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const url = 'http://example.com/data';
    const data = await FetchFunction(url);

    expect(fetch).toHaveBeenCalledWith(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );
    expect(data).toEqual({ key: 'value' });
  });

  it('should throw an error if fetch fails', async () => {
    // Mock fetch
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const url = 'http://example.com/data';

    await expect(FetchFunction(url)).rejects.toThrow('Error fetching data');
    expect(fetch).toHaveBeenCalledWith(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );
  });
});
