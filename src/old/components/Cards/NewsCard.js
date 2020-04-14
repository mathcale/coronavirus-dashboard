import styled from 'styled-components';
import { CardWrapper } from './Card';

const CardImage = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 180px;
  background-color: #eee;
  border-radius: 15px 15px 0 0;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }

  p {
    width: 100%;
    align-self: center;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #aaa;
  }
`;

const CardContent = styled.div`
  padding: 20px;

  h4 {
    margin-bottom: 10px;
    color: var(--white);

    a {
      text-decoration: none;
      color: var(--white);
    }
  }

  p {
    font-size: 14px;
    font-style: italic;
    color: #ccc;

    span {
      font-weight: bold;
      font-style: normal;
    }
  }
`;

export const NewsCard = ({ news, lang }) => (
  <CardWrapper news>
    <CardImage>
      {news.imagem !== '' ? (
        <img src={news.imagem} title={news.titulo} />
      ) : (
        <p>Sem Imagem</p>
      )}
    </CardImage>

    <CardContent>
      <h4><a href={news.url} target="_blank">{news.titulo}</a></h4>
      <p><span>{news.site}</span>, em {new Date(news.dt_envio).toLocaleDateString(lang)} às {new Date(news.dt_envio).toLocaleTimeString(lang)}</p>
    </CardContent>
  </CardWrapper>
);
