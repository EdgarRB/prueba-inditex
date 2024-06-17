import PodcastDetail, { Result } from '../model/PodcastDetailModel';
import Podcast from '../model/PodcastModel';

export const mockPodcastDetailData: PodcastDetail = {
  resultCount: 2,
  results: [
    {
      wrapperType: 'collection',
      kind: 'podcast',
      collectionId: 12345,
      trackId: 12345,
      artistName: 'Test Artist',
      collectionName: 'Test Podcast',
      trackName: 'Test Podcast',
      collectionCensoredName: 'Test Podcast',
      trackCensoredName: 'Test Podcast',
      collectionViewUrl: 'http://test.com/collection',
      feedUrl: 'http://test.com/feed',
      trackViewUrl: 'http://test.com/track',
      artworkUrl30: 'http://test.com/artwork30',
      artworkUrl60: 'http://test.com/artwork60',
      artworkUrl100: 'http://test.com/artwork100',
      collectionPrice: 0,
      trackPrice: 0,
      collectionHdPrice: 0,
      releaseDate: '2021-01-01T00:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 2,
      trackTimeMillis: 3600000,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Comedy',
      contentAdvisoryRating: 'Clean',
      artworkUrl600: 'http://test.com/artwork600',
      genreIds: ['123'],
      genres: [
        {
          name: 'Comedy',
          id: '123',
        },
      ],
    },
    {
      wrapperType: 'track',
      kind: 'podcast-episode',
      collectionId: 12345,
      trackId: 67890,
      artistName: 'Test Artist',
      collectionName: 'Test Podcast',
      trackName: 'Episode 1',
      collectionCensoredName: 'Test Podcast',
      trackCensoredName: 'Episode 1',
      collectionViewUrl: 'http://test.com/collection',
      feedUrl: 'http://test.com/feed',
      trackViewUrl: 'http://test.com/track1',
      artworkUrl30: 'http://test.com/artwork30',
      artworkUrl60: 'http://test.com/artwork60',
      artworkUrl100: 'http://test.com/artwork100',
      collectionPrice: 0,
      trackPrice: 0,
      collectionHdPrice: 0,
      releaseDate: '2021-01-01T00:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 2,
      trackTimeMillis: 1800000,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Comedy',
      contentAdvisoryRating: 'Clean',
      artworkUrl600: 'http://test.com/artwork600',
      genreIds: ['123'],
      genres: [
        {
          name: 'Comedy',
          id: '123',
        },
      ],
      artworkUrl160: 'http://test.com/artwork160',
      previewUrl: 'http://test.com/preview1',
      episodeFileExtension: 'mp3',
      episodeContentType: 'audio/mpeg',
      description: 'Description of Episode 1',
      shortDescription: 'Short description of Episode 1',
      episodeUrl: 'http://test.com/episode1',
    },
    {
      wrapperType: 'track',
      kind: 'podcast-episode',
      collectionId: 12345,
      trackId: 67891,
      artistName: 'Test Artist',
      collectionName: 'Test Podcast',
      trackName: 'Episode 2',
      collectionCensoredName: 'Test Podcast',
      trackCensoredName: 'Episode 2',
      collectionViewUrl: 'http://test.com/collection',
      feedUrl: 'http://test.com/feed',
      trackViewUrl: 'http://test.com/track2',
      artworkUrl30: 'http://test.com/artwork30',
      artworkUrl60: 'http://test.com/artwork60',
      artworkUrl100: 'http://test.com/artwork100',
      collectionPrice: 0,
      trackPrice: 0,
      collectionHdPrice: 0,
      releaseDate: '2021-01-02T00:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 2,
      trackTimeMillis: 1800000,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Comedy',
      contentAdvisoryRating: 'Clean',
      artworkUrl600: 'http://test.com/artwork600',
      genreIds: ['123'],
      genres: [
        {
          name: 'Comedy',
          id: '123',
        },
      ],
      artworkUrl160: 'http://test.com/artwork160',
      previewUrl: 'http://test.com/preview2',
      episodeFileExtension: 'mp3',
      episodeContentType: 'audio/mpeg',
      description: 'Description of Episode 2',
      shortDescription: 'Short description of Episode 2',
      episodeUrl: 'http://test.com/episode2',
    },
  ],
};

export const mockPodcastListData: Podcast = {
  feed: {
    author: {
      name: { label: 'Author Name' },
      uri: { label: 'Author URI' },
    },
    entry: [
      {
        'im:name': { label: 'Podcast 1' },
        'im:image': [{ label: 'Image 1', attributes: { height: '100' } }],
        summary: { label: 'Summary 1' },
        'im:price': {
          label: '$0.00',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: 'Rights 1' },
        title: { label: 'Title 1' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'http://example.com/1',
          },
        },
        id: { label: 'ID 1', attributes: { 'im:id': '1' } },
        'im:artist': {
          label: 'Artist 1',
          attributes: { href: 'http://example.com/artist1' },
        },
        category: {
          attributes: {
            'im:id': '1301',
            term: 'Technology',
            scheme: 'http://example.com/scheme',
            label: 'Technology',
          },
        },
        'im:releaseDate': {
          label: '2021-01-01',
          attributes: { label: 'January 1, 2021' },
        },
      },
      {
        'im:name': { label: 'Podcast 2' },
        'im:image': [{ label: 'Image 2', attributes: { height: '100' } }],
        summary: { label: 'Summary 2' },
        'im:price': {
          label: '$0.00',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: 'Rights 2' },
        title: { label: 'Title 2' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'http://example.com/2',
          },
        },
        id: { label: 'ID 2', attributes: { 'im:id': '2' } },
        'im:artist': {
          label: 'Artist 2',
          attributes: { href: 'http://example.com/artist2' },
        },
        category: {
          attributes: {
            'im:id': '1301',
            term: 'Technology',
            scheme: 'http://example.com/scheme',
            label: 'Technology',
          },
        },
        'im:releaseDate': {
          label: '2021-01-02',
          attributes: { label: 'January 2, 2021' },
        },
      },
    ],
    updated: { label: '2021-01-01T12:00:00Z' },
    rights: { label: 'All rights reserved' },
    title: { label: 'Top Podcasts' },
    icon: { label: 'http://example.com/icon.png' },
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'http://example.com',
        },
      },
    ],
    id: { label: 'http://example.com/feed' },
  },
};

export const mockEpisodes: Result[] = [
  {
    wrapperType: 'collection',
    kind: 'podcast',
    collectionId: 12345,
    trackId: 12345,
    artistName: 'Test Artist',
    collectionName: 'Test Podcast',
    trackName: 'Test Podcast',
    collectionCensoredName: 'Test Podcast',
    trackCensoredName: 'Test Podcast',
    collectionViewUrl: 'http://test.com/collection',
    feedUrl: 'http://test.com/feed',
    trackViewUrl: 'http://test.com/track',
    artworkUrl30: 'http://test.com/artwork30',
    artworkUrl60: 'http://test.com/artwork60',
    artworkUrl100: 'http://test.com/artwork100',
    collectionPrice: 0,
    trackPrice: 0,
    collectionHdPrice: 0,
    releaseDate: '2021-01-01T00:00:00Z',
    collectionExplicitness: 'cleaned',
    trackExplicitness: 'cleaned',
    trackCount: 2,
    trackTimeMillis: 3600000,
    country: 'USA',
    currency: 'USD',
    primaryGenreName: 'Comedy',
    contentAdvisoryRating: 'Clean',
    artworkUrl600: 'http://test.com/artwork600',
    genreIds: ['123'],
    genres: [
      {
        name: 'Comedy',
        id: '123',
      },
    ],
  },
  {
    wrapperType: 'track',
    kind: 'podcast-episode',
    collectionId: 12345,
    trackId: 67890,
    artistName: 'Test Artist',
    collectionName: 'Test Podcast',
    trackName: 'Episode 1',
    collectionCensoredName: 'Test Podcast',
    trackCensoredName: 'Episode 1',
    collectionViewUrl: 'http://test.com/collection',
    feedUrl: 'http://test.com/feed',
    trackViewUrl: 'http://test.com/track1',
    artworkUrl30: 'http://test.com/artwork30',
    artworkUrl60: 'http://test.com/artwork60',
    artworkUrl100: 'http://test.com/artwork100',
    collectionPrice: 0,
    trackPrice: 0,
    collectionHdPrice: 0,
    releaseDate: '2021-01-01T00:00:00Z',
    collectionExplicitness: 'cleaned',
    trackExplicitness: 'cleaned',
    trackCount: 2,
    trackTimeMillis: 1800000,
    country: 'USA',
    currency: 'USD',
    primaryGenreName: 'Comedy',
    contentAdvisoryRating: 'Clean',
    artworkUrl600: 'http://test.com/artwork600',
    genreIds: ['123'],
    genres: [
      {
        name: 'Comedy',
        id: '123',
      },
    ],
    artworkUrl160: 'http://test.com/artwork160',
    previewUrl: 'http://test.com/preview1',
    episodeFileExtension: 'mp3',
    episodeContentType: 'audio/mpeg',
    description: 'Description of Episode 1',
    shortDescription: 'Short description of Episode 1',
    episodeUrl: 'http://test.com/episode1',
  },
  {
    wrapperType: 'track',
    kind: 'podcast-episode',
    collectionId: 12345,
    trackId: 67891,
    artistName: 'Test Artist',
    collectionName: 'Test Podcast',
    trackName: 'Episode 2',
    collectionCensoredName: 'Test Podcast',
    trackCensoredName: 'Episode 2',
    collectionViewUrl: 'http://test.com/collection',
    feedUrl: 'http://test.com/feed',
    trackViewUrl: 'http://test.com/track2',
    artworkUrl30: 'http://test.com/artwork30',
    artworkUrl60: 'http://test.com/artwork60',
    artworkUrl100: 'http://test.com/artwork100',
    collectionPrice: 0,
    trackPrice: 0,
    collectionHdPrice: 0,
    releaseDate: '2021-01-02T00:00:00Z',
    collectionExplicitness: 'cleaned',
    trackExplicitness: 'cleaned',
    trackCount: 2,
    trackTimeMillis: 1800000,
    country: 'USA',
    currency: 'USD',
    primaryGenreName: 'Comedy',
    contentAdvisoryRating: 'Clean',
    artworkUrl600: 'http://test.com/artwork600',
    genreIds: ['123'],
    genres: [
      {
        name: 'Comedy',
        id: '123',
      },
    ],
    artworkUrl160: 'http://test.com/artwork160',
    previewUrl: 'http://test.com/preview2',
    episodeFileExtension: 'mp3',
    episodeContentType: 'audio/mpeg',
    description: 'Description of Episode 2',
    shortDescription: 'Short description of Episode 2',
    episodeUrl: 'http://test.com/episode2',
  },
];