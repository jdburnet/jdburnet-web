import React from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';

import listMaker from '../../utils/listMaker';
import { rhythm } from '../../utils/typography';

import ExperienceSubSection from './ExperienceSubSection';
import SkillsSubSection from './SkillsSubSection';

const ResumeSection = (props) => {
  const {
    subsections,
    title,
  } = props;
  const listItems = listMaker(subsections);
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: ${rhythm(7)} auto;
      `}
    >
      <h2>
        <span
          className={css`
            border-bottom: 1px solid;
            padding-left: ${rhythm(0.10)};
            padding-right: ${rhythm(0.10)};
          `}
        >
          {title}
        </span>
      </h2>
      <ul
        className={css`
          list-style: none;
          margin-left: 0;
        `}
      >
        {listItems}
      </ul>
    </div>
  );
};

ResumeSection.propTypes = {
  subsections: PropTypes.oneOfType([
    PropTypes.arrayOf(ExperienceSubSection),
    PropTypes.arrayOf(SkillsSubSection),
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default ResumeSection;
