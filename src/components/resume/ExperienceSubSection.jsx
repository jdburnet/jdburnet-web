import React from 'react';
import { css } from 'react-emotion';
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
          className={css`
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
