/** @jsx jsx */
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';

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

export {
  ExternalLink,
  InternalLink,
};
