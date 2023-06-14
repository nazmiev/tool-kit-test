import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import RepositoryPage from './pages/RepositoryPage/';
import MainLayout from './layouts/MainLayout.tsx';

function App() {
  console.log('app');
  return (
    <>
      <Routes>
        <Route path="/tool-kit-test/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/repository/:owner/:reponame" element={<RepositoryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
