import { createContext, useState, ReactNode, FC, useMemo } from 'react';
import { Entry } from '../model/PodcastModel';

interface PodcastContextProps {
  podcastEntry: Entry | null;
  setPodcastEntry: (podcastEntry: Entry) => void;
}

const PodcastContext = createContext<PodcastContextProps | undefined>(
  undefined
);

const PodcastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [podcastEntry, setPodcastEntry] = useState<Entry | null>(null);

  const value = useMemo(
    () => ({ podcastEntry, setPodcastEntry }),
    [podcastEntry]
  );

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
};

export { PodcastContext, PodcastProvider };
