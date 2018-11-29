import React from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

const HeaderLink = props => (
  <Link 
    to={props.to}
    className={css`
      text-decoration: none;
    `}
  >
    <h3
      className={css`
        margin-bottom: ${rhythm(2)};
      `}
    >
      {props.name}
    </h3>
  </Link>
);

const Header = props => (
  <div>
    <div
      id="header"
      className={css`
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 3fr auto;
        grid-column-gap: ${rhythm(0.5)};
      `}
    >
      <HeaderLink
        to={`/`}
        name={props.title}
      />
      <HeaderLink
        to={`/`}
        name="home"
      />
      <HeaderLink
        to={`/about/`}
        name="about"
      />
      <HeaderLink
        to={`/resume/`}
        name="resume"
      />
    </div>
  </div>
);

export default Header;
