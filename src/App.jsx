import React from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from "./redux/slices/repos"


function App() {
  const dispatch = useDispatch();
  const { repos } = useSelector(state => state.repos);

  React.useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  return (
    <>
      {((repos.status === 'loaded')
        ? repos.items.data.repositoryOwner.repositories.edges.map((repo) => (
          <div key={repo.node.id}>
            <h2>Имя репозитория: {repo.node.name}</h2>
            <p>Звёзд: {repo.node.stargazers.totalCount}</p>
            <p>Дата последнего commita: {repo.node.updatedAt.split('T')[0]}</p>
            <a href={repo.node.url}>Ссылка на репозиторий на GitHub</a>
          </div>
        ))
        : <h1>Загрузка</h1>)}
    </>
  )
}

export default App
