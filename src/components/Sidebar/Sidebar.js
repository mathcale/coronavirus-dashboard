import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PageAwareLink } from '../PageAwareLink/PageAwareLink';

const Ul = styled.ul`
  margin-top: 100px;
  margin-left: 20px;
  list-style: none;

  li {
    margin-bottom: 30px;

    a {
      font-size: 18px;
      text-decoration: none;
      color: var(--white);
      transition: color 300ms ease-in-out;
      cursor: pointer;

      &:hover {
        color: var(--accent-color);
      }

      &.selected {
        font-weight: bold;
        color: var(--accent-color);
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

const SidebarBrandDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 74px;
    height: 64px;
    margin-right: 15px;
    background-color: var(--main-color);
    border-radius: 10px;

    img {
      width: 42px;
    }
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: var(--white);
  }
`;

export const SidebarBrand = props => (
  <SidebarBrandDiv>
    <PageAwareLink href="/">
      <>
        <div className="icon">
          <img src="/img/virus.png" alt="COVID-19"/>
        </div>

        <h3>Coronavirus Statistics</h3>
      </>
    </PageAwareLink>
  </SidebarBrandDiv>
);

export const Sidebar = props => (
  <div className="sidebar">
    <SidebarBrand />

    <Ul>
      {props.children}
    </Ul>
  </div>
);

export const SidebarLink = props => (
  <li>
    <PageAwareLink href={props.href}>
      <a>
        <FontAwesomeIcon icon={props.icon} /> {props.title}
      </a>
    </PageAwareLink>
  </li>
);
