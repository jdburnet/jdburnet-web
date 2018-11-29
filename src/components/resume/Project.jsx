import React from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';

import { ExternalLink } from '../InlineLink';
import { rhythm } from '../../utils/typography';

const Project = (props) => {
  const {
    name,
    url,
    description,
  } = props;
  return (
    <li
      className={css`
        padding-right: ${rhythm(0.5)};
      `}
    >
      <ExternalLink
        to={url}
        text={name}
      />
      -
      {' '}
      {description}
    </li>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Project;
