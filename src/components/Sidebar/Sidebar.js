import { createRef, forwardRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { PageAwareLink } from '../PageAwareLink/PageAwareLink';
import { getMessage } from '../../lang';

const Ul = styled.ul`
  position: relative;
  margin-top: 100px;
  margin-left: 20px;
  list-style: none;
  transition: all 300ms ease-in-out;

  @media screen and (max-width: 1130px) {
    display: none;
    margin-top: 20px;
    text-align: center;
  }

  &.show {
    display: block;

    li {
      display: block !important;
      margin-bottom: 10px;
    }
  }

  li {
    margin-bottom: 30px;

    @media screen and (max-width: 1130px) {
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 0px;
    }

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

const SidebarFooterWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  width: 300px;
  padding-right: 60px;
  text-align: center;

  a {
    transition: font-weight 300ms ease-in-out;
  }

  a:hover {
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: var(--white);

    a {
      color: var(--accent-color);
    }
  }

  p:last-child {
    margin-top: 10px;

    a {
      text-decoration: none;
    }
  }

  &.show {
    display: block;
  }

  @media screen and (max-width: 1130px) {
    display: none;
    position: initial;
    width: 100%;
    padding-right: initial;
    padding-right: 0px;
  }
`;

const SidebarFooter = forwardRef((props, ref) => (
  <SidebarFooterWrapper ref={ref}>
    <p dangerouslySetInnerHTML={{ __html: getMessage('CREATED_BY', props.lang) }} />

    <p>
      <a
        href="https://github.com/mathcale/coronavirus-dashboard"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} /> {getMessage('SOURCE_CODE', props.lang)}
      </a>
    </p>
  </SidebarFooterWrapper>
));

const SidebarMenuWrapper = styled.div`
  display: none;
  text-align: center;

  a.menu-toggle {
    text-decoration: none;
    font-weight: bold;
    color: var(--white);
    transition: color 300ms ease;

    &:hover {
      color: var(--accent-color);
    }
  }

  @media screen and (max-width: 1130px) {
    display: block;
  }
`;

export const Sidebar = props => {
  const menuRef = createRef();
  const footerRef = createRef();

  const toggleMenu = e => {
    e.preventDefault();
    menuRef.current.classList.toggle('show');
    footerRef.current.classList.toggle('show');
  };

  return (
    <div className="sidebar">
      <SidebarBrand />

      <SidebarMenuWrapper>
        <a href="#" className="menu-toggle" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /> Menu</a>
      </SidebarMenuWrapper>

      <Ul ref={menuRef}>
        {props.children}
      </Ul>

      <SidebarFooter lang={props.lang || 'pt-BR'} ref={footerRef} />
    </div>
  );
};

export const SidebarLink = props => (
  <li>
    <PageAwareLink href={props.href}>
      <a>
        <FontAwesomeIcon icon={props.icon} /> {props.title}
      </a>
    </PageAwareLink>
  </li>
);
