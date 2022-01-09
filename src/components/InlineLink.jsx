/** @jsx jsx */
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const linkPropTypesCommon = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function ExternalLink(props) {
  const {
    to,
    text,
  } = props;
  return (
    <a
      href={to}
      css={css`
        text-decoration: none;
      `}
    >
      {' '}
      {text}
      {' '}
    </a>
  );
}

ExternalLink.propTypes = linkPropTypesCommon;

function InternalLink(props) {
  const {
    to,
    text,
  } = props;
  return (
    <Link
      to={to}
      css={css`
        text-decoration: none;
      `}
    >
      {' '}
      {text}
      {' '}
    </Link>
  );
}

InternalLink.propTypes = linkPropTypesCommon;

export {
  ExternalLink,
  InternalLink,
};
