import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, NewsContainer, Card, NewsCard } from '../components';
import { getMessage } from '../lang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const NewsPage = props => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get('/api/news');
        setNews(response.data);
      } catch (err) {
        alert('Houve um problema ao buscar as notícias. Tente novamente mais tarde!');
      }
    }

    fetchNews();
  },[]);

  return (
    <Container>
      <h1>{getMessage('NEWS_PAGE_TITLE', props.lang)}</h1>

      {news ? (
        <NewsContainer>
          {news.map(n => (
            <NewsCard news={n} key={n.id} lang={props.lang} />
          ))}
        </NewsContainer>
      ) : (
        <Card content>
          <p><FontAwesomeIcon icon={faSpinner} spin /> {getMessage('LOADING', props.lang)}</p>
        </Card>
      )}
    </Container>
  );
};

export default NewsPage;
