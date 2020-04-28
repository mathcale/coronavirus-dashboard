import fetch from 'isomorphic-unfetch';

import { Card } from '../components';

const NewsPage = ({ news }) => {
  return (
    <div className="row">
      {news.length > 0 ? (
        news.map((n, i) => (
          <div className="col-md-3" key={i} style={{ marginBottom: 20 }}>
            <Card news>
              <div className="news-card--image">
                {n.imagem !== '' ? (
                  <img src={n.imagem} title={n.titulo} alt={n.titulo} />
                ) : (
                  <p>Sem Imagem</p>
                )}
              </div>

              <div className="news-card--content">
                <h3>{n.titulo}</h3>
                <p><span>{n.site}</span>, em {new Date(n.dt_envio).toLocaleDateString('pt-br')} às {new Date(n.dt_envio).toLocaleTimeString('pt-br')}</p>

                <a href={n.url} target="_blank" rel="noopener">Ler Notícia <i className="cil-arrow-right" /></a>
              </div>
            </Card>
          </div>
        ))
      ) : (
        <p>Notícias não disponíveis no momento!</p>
      )}
    </div>
  )
};

export async function getServerSideProps(context) {
  const dev = process.env.NODE_ENV !== 'production';
  const endpoint = dev ? 'http://localhost:3000' : 'https://covid19.matheus.me'

  const response = await fetch(`${endpoint}/api/news`);
  const news = await response.json();

  return {
    props: {
      news,
    },
  }
}

export default NewsPage;
