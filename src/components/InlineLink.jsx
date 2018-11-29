import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';

const ExternalLink = (props) => {
  const {
    to,
    text,
  } = props;
  return (
    <a
      href={to}
      className={css`
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
      className={css`
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
