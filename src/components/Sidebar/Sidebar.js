import styled from 'styled-components';

import { Card } from '../Card/Card';
import { PageAwareLink } from '../PageAwareLink/PageAwareLink';

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  cursor: pointer;

  i {
    font-size: 24px;
    color: var(--sidebar-link-color);
    transition: color 300ms ease-in-out;
  }

  &:hover i {
    color: var(--sidebar-active-link-bg-color);
  }

  a {
    display: none;
  }

  &.active {
    align-items: center;
    flex-direction: column;
    margin-left: 35px;
    padding: 20px;
    background-color: var(--sidebar-active-link-bg-color);
    border-radius: 15px;
    box-shadow: 0px 5px 20px rgba(252, 49, 46, 0.8);

    i, a {
      color: var(--sidebar-active-link-color);
    }

    a {
      display: block;
      margin-top: 5px;
    }
  }
`;

const SidebarItem = ({ title, href, icon }) => (
  <PageAwareLink href={href}>
    <StyledLi>
      <i className={`cil-${icon}`} />
      <a>{title}</a>
    </StyledLi>
  </PageAwareLink>
);

export const Sidebar = props => (
  <Card sidebar>
    <img src="/img/virus.png" width="100%" alt="COVID-19 Dashboard" />

    <div className="sidebar-links">
      <ul style={{ listStyle: 'none' }}>
        <SidebarItem title="Resumo" icon="globe-alt" href="/" />
        <SidebarItem title="Brasil" icon="home" href="/brazil" />
        <SidebarItem title="Filtrar" icon="search" href="/countries" />
        <SidebarItem title="Notícias" icon="newspaper" href="/news" />
        <SidebarItem title="Dicas" icon="healing" href="/safety" />
      </ul>
    </div>

    <div className="sidebar-bottom">
      <p>👋</p>
    </div>
  </Card>
);
