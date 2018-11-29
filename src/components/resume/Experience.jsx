import React from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';

import listMaker from '../../utils/listMaker';

const Experience = (props) => {
  const {
    title,
    start,
    end,
    contents,
  } = props;
  const listItems = listMaker(contents);
  return (
    <div>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <h4>
          {title}
        </h4>
        <h4>
          {start}
          {' '}
          -
          {' '}
          {end}
        </h4>
      </div>
      <div>
        <ul
          className={css`
            list-style: none;
            margin-left: 0;
          `}
        >
          {listItems}
        </ul>
      </div>
    </div>
  );
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;
