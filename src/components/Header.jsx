/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

const HeaderLink = props => (
  <Link 
    to={props.to}
    css={css`
      text-decoration: none;
    `}
  >
    <h3
      css={css`
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
      css={css`
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
