/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';

const ExternalLink = (props) => {
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
};

const InternalLink = (props) => {
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
};

export {
  ExternalLink,
  InternalLink,
};
