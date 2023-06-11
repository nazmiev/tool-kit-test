import React from 'react';
import { useSelector } from 'react-redux';
import { fetchRepos } from "../redux/repositories/asyncActions"
import Repoblock from '../components/RepoBlock';
import { useAppDispatch } from '../redux/store';
import { selectReposData } from '../redux/repositories/selectors';

const Home:React.FC = () => {
  const dispatch = useAppDispatch();
  const { repos, status } = useSelector(selectReposData);

  React.useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  return (
    <>
      {((status === 'loaded')
        ? repos.data.repositoryOwner.repositories.edges.map((repo: any) => (
          <Repoblock key={repo.node.id} {...repo.node} />
        ))
        : <h1>Загрузка</h1>)}
    </>
  )
}

export default Home
