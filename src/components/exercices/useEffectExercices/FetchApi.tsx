import { ReactElement, useEffect, useState } from 'react';
import { Pagination } from '../Pagination';
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
const FetchApi = (): ReactElement => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error("l'appel à l'api n'a pu aboutir");
        }
        const posts = await response.json();
        setPosts(posts);
      } catch (e) {
        console.log(e);
        setError('error');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className='overflow-hidden'>
      {!!error && <h1>ERROR: {JSON.stringify(error)}</h1>}
      {!error && loading ? (
        <h1>LOADING MAN ...</h1>
      ) : (
        <Pagination itemsPerPage={10}>
          {posts.map((post) => {
            return (
              <div key={post.id} className='flex flex-col items-center py-2 px-4 gap-2 text-white'>
                <h1>{post.id}</h1>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            );
          })}
        </Pagination>
      )}
    </div>
  );
};
export { FetchApi };
