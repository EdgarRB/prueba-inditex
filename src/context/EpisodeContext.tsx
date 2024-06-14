import { createContext, useState, ReactNode, FC, useMemo } from 'react';
import { Result } from '../model/PodcastDetailModel';

interface EpisodeContextProps {
  episodeResult: Result | null;
  setEpisodeResult: (episodeResult: Result) => void;
}

const EpisodeContext = createContext<EpisodeContextProps | undefined>(
  undefined
);

const EpisodeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [episodeResult, setEpisodeResult] = useState<Result | null>(null);

  const value = useMemo(
    () => ({ episodeResult, setEpisodeResult }),
    [episodeResult]
  );

  return (
    <EpisodeContext.Provider value={value}>{children}</EpisodeContext.Provider>
  );
};

export { EpisodeContext, EpisodeProvider };
