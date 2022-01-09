import React from 'react';
import PropTypes from 'prop-types';

import { ExternalLink } from '../InlineLink';

function Project(props) {
  const {
    name,
    url,
    description,
  } = props;
  return (
    <li>
      <ExternalLink
        to={url}
        text={name}
      />
      -
      {' '}
      {description}
    </li>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
