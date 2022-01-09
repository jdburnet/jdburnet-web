/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import { rhythm } from '../../utils/typography';

const SkillsSubSection = (props) => {
  const {
    skills,
  } = props;
  const listItems = skills.map(skill => (
    <li
      key={skill}
      css={css`
        padding-right: ${rhythm(0.5)};
      `}
    >
      {skill}
    </li>
  ));
  return (
    <div>
      <ul
        css={css`
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          list-style: none;
          margin-left: 0;
        `}
      >
        {listItems}
      </ul>
    </div>
  );
};

SkillsSubSection.propTypes = {
  skills: PropTypes.string.isRequired,
};

export default SkillsSubSection;
