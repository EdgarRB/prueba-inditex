export default interface PodcastDetail {
  resultCount: number;
  results: Result[];
}

interface Genre {
  name: string;
  id: string;
}

export interface Result {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres?: Genre[];
  artworkUrl160?: string;
  previewUrl?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
  artistIds?: string[];
  closedCaptioning?: string;
  episodeGuid?: string;
  description?: string;
  shortDescription?: string;
  episodeUrl?: string;
}
