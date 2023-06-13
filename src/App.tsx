import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import RepositoryPage from './pages/RepositoryPage/';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/repository/:owner/:reponame" element={<RepositoryPage />} /> */}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
