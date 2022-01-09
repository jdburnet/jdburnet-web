/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import Layout from '../components/Layout';
import ResumeSection from '../components/resume/ResumeSection';
import Experience from '../components/resume/Experience';
import ExperienceSubSection from '../components/resume/ExperienceSubSection';
import SkillsSubSection from '../components/resume/SkillsSubSection';
import Project from '../components/resume/Project';

const systemsEngineerExperience = (
  <Experience
    title="Systems Validation Engineer"
    start="February 2017"
    end="present"
    contents={[
      'Core developer of concurrency focused testing framework, owner of '
      + 'register access tool and logging module',
      'Owner of Self Monitoring and Report Techonology (SMART) test plan '
      + 'and content development',
      'Firmware debug and root cause analysis',
    ]}
  />
);
const intelInternExperience = (
  <Experience
    title="Test Content Development Intern"
    start="May 2016"
    end="January 2017"
    contents={[
      'Own test content development for Self Monitoring Analysis and '
      + 'Reporting Technology',
      'Develop device under test detection automation',
    ]}
  />
);
const intel = (
  <ExperienceSubSection
    company="Intel"
    experiences={[
      systemsEngineerExperience,
      intelInternExperience,
    ]}
  />
);

const genentech = (
  <ExperienceSubSection
    company="Genentech"
    experiences={[
      <Experience
        title="Senior Bioprocess Technician"
        start="July 2014"
        end="April 2016"
        contents={[
          'Senior Bioprocess Technician in Cell Culture Plant 2 Return to '
          + 'Service project',
          'Developer of automated data sheet updates',
          'Liaison between quality assurance and manufacturing during '
          + 'descrepent events',
        ]}
      />,
    ]}
  />
);

const tutoringRocks = (
  <ExperienceSubSection
    company="Tutoring Rocks!"
    experiences={[
      <Experience
        title="Academic Mentor"
        start="August 2013"
        end="May 2014"
        contents={[
          'Lead high school math and science tutoring session one-on-one '
          + 'and in groups',
          'Developer of a timecard reporting automation tool',
        ]}
      />,
    ]}
  />
);

const infoWedge = (
  <ExperienceSubSection
    company="infoWedge"
    experiences={[
      <Experience
        title="Engineering Technician"
        start="June 2010"
        end="September 2012"
        contents={[
          'Performed setup, operation, maintenance and tear down of portable '
          + 'exhaust measurement system (PEMS)',
          'Assured calibration and linearity of lab-grade exhaust emissions '
          + 'measurement insturmentation',
          'Assisted in fabrications and installation for PEMS in use testing',
          'Assisted in design of flow meter calibration system',
        ]}
      />,
    ]}
  />
);

const ucsc = (
  <ExperienceSubSection
    company="University of California Santa Cruz"
    experiences={[
      <Experience
        title="BS in Bioengineering, Minor in Bioinformatics"
        start="September 2009"
        end="June 2013"
        contents={[
          'Cumulative GPA 3.96/4.00, Magna Cum Laude',
          '2 time recipient of Campus Merit-James Scholarship for Academic '
          + 'Excellence',
          'Recipient of Youngs Award for Achievements in Mathematics',
          'Top Graduate Group in Bioengineering class of 2013',
        ]}
      />,
    ]}
  />
);

const toolsAndTech = (
  <SkillsSubSection
    skills={[
      'Python (proficient)',
      'C (proficient)',
      'Bash (proficient)',
      'Rust (prior experience)',
      'Git (proficient)',
      'Gerrit (proficient)',
      'Make (proficient)',
    ]}
  />
);

const jdburnetWeb = (
  <Project
    name="jdburnet-web"
    url="https://github.com/jdburnet/jdburnet-web"
    description="personal website using static website generator gatsbyjs"
  />
);

const fii = (
  <Project
    name="fii"
    url="https://github.com/jdburnet/fii"
    description="command line tool to track progress toward financial independence, written in Rust"
  />
);

const rustMc = (
  <Project
    name="rust-mc"
    url="https://github.com/jdburnet/rust-mc"
    description="exploring the world of embedded devlopment using Rust"
  />
);

const evergreenDb = (
  <Project
    name="evergreendb"
    url="https://github.com/mrmarkwell/evergreendb"
    description="custom built database and management tool for Evergreen Family Services with a python backend and Angular2 frontend"
  />
);

const projects = (
  <div>
    <ul
      css={css`
        list-style: none;
        margin-left: 0;
      `}
    >
      {jdburnetWeb}
      {fii}
      {rustMc}
      {evergreenDb}
    </ul>
  </div>
);

const resume = () => (
  <Layout>
    <div>
      <ResumeSection
        title="Work"
        subsections={[
          intel,
          genentech,
          tutoringRocks,
          infoWedge,
        ]}
      />
      <ResumeSection
        title="Projects"
        subsections={[
          projects,
        ]}
      />
      <ResumeSection
        title="Tools and Technology"
        subsections={[
          toolsAndTech,
        ]}
      />
      <ResumeSection
        title="Education"
        subsections={[
          ucsc,
        ]}
      />
    </div>
  </Layout>
);

export default resume;
