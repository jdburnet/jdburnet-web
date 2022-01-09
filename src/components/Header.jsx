/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { rhythm } from '../utils/typography';

function HeaderLink(props) {
  const {
    to,
    name,
  } = props;
  return (
    <Link
      to={to}
      css={css`
      text-decoration: none;
    `}
    >
      <h3
        css={css`
        margin-bottom: ${rhythm(2)};
      `}
      >
        {name}
      </h3>
    </Link>
  );
}

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function Header(props) {
  const {
    title,
  } = props;
  return (
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
          to="/"
          name={title}
        />
        <HeaderLink
          to="/"
          name="home"
        />
        <HeaderLink
          to="/about/"
          name="about"
        />
        <HeaderLink
          to="/resume/"
          name="resume"
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
