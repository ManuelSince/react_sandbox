import { ReactElement, useState } from 'react';

const ListeCourses = (): ReactElement => {
  const [articles, setArticles] = useState<string[]>([]);
  const products = [
    'tomate',
    'gateau',
    'cereales',
    'pain',
    'chaussettes',
    'concombre',
    'poulet pour cédric',
    'croissant',
    'liquide vaisselle',
    'chocolat noir',
    'riz',
    'salade Niçoise',
  ];
  const handleArticles = (e: React.FormEvent<HTMLSelectElement>) => {
    setArticles([...articles, e.currentTarget.value]);
  };
  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-white'>Liste de courses</h1>

      <div className='flex items-center justify-center gap-2 w-full'>
        <select onChange={handleArticles} className='mb-2' defaultValue='chaussettes'>
          {products.map((product, idx) => (
            <option key={idx} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>
      <div className='flex items-center justify-between w-8-10'>
        <h3 className='text-white'>{`il y a ${articles.length} article${
          articles.length !== 1 ? 's' : ''
        } dans le panier`}</h3>
        <span
          className='ml-2 bg-red-400 border pointer px-4 py-2 rounded text-white'
          onClick={() => {
            const articlesCloned = [...articles];
            articlesCloned.pop();
            setArticles(articlesCloned);
          }}
        >
          retirer dernier article
        </span>
      </div>

      {articles &&
        articles.map((article, idx) => (
          <div className='bg-red-400 w-8-10 text-white h-10 flex justify-center items-center mb-1' key={idx}>
            <span>{article}</span>
          </div>
        ))}
    </div>
  );
};
export { ListeCourses };
