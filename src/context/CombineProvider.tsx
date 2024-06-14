import { FC, ReactNode } from 'react';
import { LoadingProvider } from './LoadingContext';
import { PodcastProvider } from './PodcastContext';
import { EpisodeProvider } from './EpisodeContext';

const CombinedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PodcastProvider>
      <EpisodeProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </EpisodeProvider>
    </PodcastProvider>
  );
};

export { CombinedProvider };
