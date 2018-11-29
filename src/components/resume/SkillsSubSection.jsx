import React from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';

import { rhythm } from '../../utils/typography';

const SkillsSubSection = (props) => {
  const {
    skills,
  } = props;
  const listItems = skills.map(skill => (
    <li
      key={skill}
      className={css`
        padding-right: ${rhythm(0.5)};
      `}
    >
      {skill}
    </li>
  ));
  return (
    <div>
      <ul
        className={css`
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
