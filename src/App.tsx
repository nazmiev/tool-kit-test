import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import RepositoryPage from './pages/RepositoryPage/';
import MainLayout from './layouts/MainLayout';

function App() {
  console.log('app');
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
      {/* <Header /> */}
      {/* <Route path="/repository/:owner/:reponame" element={<RepositoryPage />} /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
