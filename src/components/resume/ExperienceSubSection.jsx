/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import listMaker from '../../utils/listMaker';

import Experience from './Experience';

const ExperienceSubSection = (props) => {
  const {
    company,
    experiences,
  } = props;
  const experienceItems = listMaker(experiences);
  return (
    <div>
      <h3>
        {company}
      </h3>
      <div>
        <ul
          css={css`
            list-style: none;
            margin-left: 0;
          `}
        >
          {experienceItems}
        </ul>
      </div>
    </div>
  );
};

ExperienceSubSection.propTypes = {
  company: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(Experience).isRequired,
};

export default ExperienceSubSection;
