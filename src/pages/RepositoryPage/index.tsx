import React from 'react';
import { useParams } from "react-router-dom";
import styles from './repositoryPage.module.scss'
const accessToken = import.meta.env.VITE_TOKEN;

interface IRepositoryFull {
  node: {
    name: string;
    description: string;
    stargazerCount: number;
    updatedAt: string;
    owner: {
      avatarUrl: string;
      login: string;
      url: string;
    };
    id: string;
    languages: string[];
    url: string;
  };
}

const RepositoryPage: React.FC = () => {
    const [data, setData] = React.useState<IRepositoryFull>();
    const [isLoading, setLoading] = React.useState(true);
    const { owner, reponame } = useParams();

    const queryRepo = `{
    search(
      query: "repo:${owner}/${reponame}"
      type: REPOSITORY
      first: 1
    ) {
      edges {
        node {
          ... on Repository {
            name
            stargazerCount
            updatedAt
            url
            id
            languages {
              edges {
                node {
                  id
                }
              }
            }
            description
            owner {
              login
              url
              avatarUrl
            }
          }
        }
      }
    }
  }`;

    const repoFetcher = (query: string) => {
        return fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                Authorization: `bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        }).then((res) => res.json());
    };

    const loadData = async () => {
        const {
            data: {
                search: { edges },
            },
        } = await repoFetcher(queryRepo);
        setData(edges[0]);
        setLoading(false);
    };

    React.useEffect(() => {
        loadData();
    }, []);

    return (
        <div className={styles.root}>
            {((data && !isLoading)
                ? (<>
                    <h1>{data.node.name}</h1>
                    <h3>{data.node.description}</h3>
                    <h3>Звёзд: {data.node.stargazerCount}</h3>
                    <h3>Последний коммит: {data.node.updatedAt}</h3>
                    <img src={data.node.owner.avatarUrl} />
                    <p>
                    <a href={data.node.owner.url} target="/blank">
                        {data.node.owner.login}
                    </a></p>
                </>)
                : <h1>Загрузка</h1>
                )
              }
        </div>
    );
};

export default RepositoryPage

// search query =
// {
//     search(query: "privet", type: REPOSITORY, first: 10) {
//       edges {
//         node {
//           ... on Repository {
//             name
//             description
//             stargazerCount
//             updatedAt
//             url
//             nameWithOwner
//           }
//         }
//       }
//     }
//   }  