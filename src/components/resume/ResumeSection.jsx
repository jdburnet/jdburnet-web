/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import listMaker from '../../utils/listMaker';
import { rhythm } from '../../utils/typography';

import ExperienceSubSection from './ExperienceSubSection';
import SkillsSubSection from './SkillsSubSection';

function ResumeSection(props) {
  const {
    subsections,
    title,
  } = props;
  const listItems = listMaker(subsections);
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: ${rhythm(7)} auto;
      `}
    >
      <h2>
        <span
          css={css`
            padding-left: ${rhythm(0.10)};
            padding-right: ${rhythm(0.10)};
          `}
        >
          {title}
        </span>
      </h2>
      <ul
        css={css`
          list-style: none;
          margin-left: 0;
        `}
      >
        {listItems}
      </ul>
    </div>
  );
}

ResumeSection.propTypes = {
  subsections: PropTypes.oneOfType([
    PropTypes.arrayOf(ExperienceSubSection),
    PropTypes.arrayOf(SkillsSubSection),
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default ResumeSection;
