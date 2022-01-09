/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import listMaker from '../../utils/listMaker';

function Experience(props) {
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
        css={css`
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
          css={css`
            list-style: none;
            margin-left: 0;
          `}
        >
          {listItems}
        </ul>
      </div>
    </div>
  );
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;
