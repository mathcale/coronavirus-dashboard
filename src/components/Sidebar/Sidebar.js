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

    @media (max-width: 1280px) {
      margin-left: 0px;
      padding: 10px;
    }

    i, a {
      color: var(--sidebar-active-link-color);
    }

    a {
      display: block;
      margin-top: 5px;

      @media (max-width: 1280px) {
        font-size: 14px;
      }
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

const SidebarLinks = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const SidebarMenuWrapper = styled.div`
  @media (min-width: 1024px) {
    display: block;
  }

  padding: 5px;
  border: 1px solid var(--card-border-color);
  border-radius: 4px;
`;

const SidebarMenu = () => (
  <SidebarMenuWrapper>
    <button type="button" onClick={() => null}>
      <i className="cil-hamburger-menu" />
    </button>
  </SidebarMenuWrapper>
);

const SidebarBottom = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Sidebar = () => (
  <Card sidebar>
    <img src="/img/virus.png" className="sidebar--logo" alt="COVID-19 Dashboard" />

    <SidebarMenu />

    <SidebarLinks>
      <ul style={{ listStyle: 'none' }}>
        <SidebarItem title="Mundo" icon="globe-alt" href="/" />
        <SidebarItem title="Brasil" icon="home" href="/brazil" />
        <SidebarItem title="Notícias" icon="newspaper" href="/news" />
        <SidebarItem title="Dicas" icon="healing" href="/safety" />
      </ul>
    </SidebarLinks>

    <SidebarBottom>
      <p>👋</p>
    </SidebarBottom>
  </Card>
);
