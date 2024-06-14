import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ListPage from './pages/list/List';
import { CombinedProvider } from './context/CombineProvider';
import PodcastPage from './pages/podcast/PodcastPage';
import EpisodePage from './pages/episode/EpisodePage';

function App() {
  return (
    <CombinedProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/podcast/:id" element={<PodcastPage />} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<EpisodePage />}
          />
        </Routes>
      </Router>
    </CombinedProvider>
  );
}

export default App;
