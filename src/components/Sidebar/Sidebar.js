import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;

  li {
    margin-bottom: 10px;

    a {
      font-size: 18px;
      text-decoration: none;
      color: #fff;
      cursor: pointer;
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

export const Sidebar = props => (
  <div className="sidebar">
    <Ul>
      {props.children}
    </Ul>
  </div>
);

export const SidebarLink = props => (
  <li>
    <Link href={props.href}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export const SidebarBrand = props => (
  <SidebarBrandDiv>
    <Link href="/">
      <>
        <div className="icon">
          <img src="/img/virus.png" alt="COVID-19"/>
        </div>

        <h3>Coronavirus Statistics</h3>
      </>
    </Link>
  </SidebarBrandDiv>
);
