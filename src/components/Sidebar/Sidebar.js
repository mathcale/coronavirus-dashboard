import { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Card } from '../Card/Card';
import { PageAwareLink } from '../PageAwareLink/PageAwareLink';
import brFlag from '../../../public/img/br-flag.png';

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  cursor: pointer;

  i {
    font-size: 24px;
    color: var(--sidebar-link-color);
    transition: color 300ms ease-in-out;
  }

  img {
    width: 24px;
    background-color: var(--sidebar-active-link-bg-color);
  }

  &:hover i {
    color: var(--sidebar-active-link-bg-color);
  }

  &:hover img {
  }

  a {
    display: none;
    margin-top: 5px;
    color: var(--sidebar-link-color);

    @media (max-width: 1024px) {
      display: block;
    }
  }

  &.active {
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

      @media (max-width: 1280px) {
        font-size: 14px;
      }
    }
  }
`;

const SidebarItem = ({ title, href, icon }) => (
  <PageAwareLink href={href}>
    <StyledLi>
      {icon === 'brazil' ?
        <img src={brFlag} />
        :
        <i className={`cil-${icon}`} />
      }
      <a>{title}</a>
    </StyledLi>
  </PageAwareLink>
);

const SidebarLinks = styled.div`
  @media (max-width: 1024px) {
    display: none;

    &.active {
      display: block;
      position: absolute;
      width: 100%;
      margin-top: 195px;
      margin-left: -20px;
      background-color: var(--white);
      border-bottom: 1px solid var(--sidebar-link-color);
      z-index: 10;

      ul {
        padding: 0 20px;
      }
    }
  }
`;

const SidebarMenuButtonWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }

  padding: 5px 7px;
  border: 1px solid var(--card-stats-title-color);
  border-radius: 4px;

  button {
    background: none;
    border: none;
    font-size: 18px;
  }
`;

const SidebarMenu = props => (
  <SidebarMenuButtonWrapper>
    <button type="button" onClick={props.onClick}>
      <i className="cil-hamburger-menu" />
    </button>
  </SidebarMenuButtonWrapper>
);

const SidebarBottom = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const SidebarBrandWrapper = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: var(--black);
  }

  img.sidebar--brand {
    display: block;
    position: relative;
    width: 100%;
    margin-right: 0px;

    @media (max-width: 1024px) {
      width: 32px;
      margin-right: 10px;
    }
  }

  p {
    display: none;
    font-size: 16px;
    font-weight: bold;

    span {
      color: var(--brand-color);
    }

    @media (max-width: 1024px) {
      display: block;
    }
  }
`;

export const Sidebar = () => {
  const sidebarLinksRef = useRef();

  return (
    <Card sidebar>
      <SidebarBrandWrapper>
        <Link href="/">
          <a>
            <img src="/img/virus.png" className="sidebar--brand" alt="COVID-19 Dashboard" />
            <p><span>COVID-19</span> Dashboard</p>
          </a>
        </Link>
      </SidebarBrandWrapper>

      <SidebarMenu onClick={() => sidebarLinksRef.current.classList.toggle('active')} />

      <SidebarLinks ref={sidebarLinksRef}>
        <ul style={{ listStyle: 'none' }}>
          <SidebarItem title="Mundo" icon="globe-alt" href="/" />
          <SidebarItem title="Brasil" icon="brazil" href="/brazil" />
          <SidebarItem title="Notícias" icon="newspaper" href="/news" />
          <SidebarItem title="Dicas" icon="healing" href="/safety" />
        </ul>
      </SidebarLinks>

      <SidebarBottom>
        <p>👋</p>
      </SidebarBottom>
    </Card>
  )
}
