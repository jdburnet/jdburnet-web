import React from 'react';

import Layout from '../components/Layout';
import { ExternalLink, InternalLink } from '../components/InlineLink';

const index = () => (
  <Layout>
    <h1>Hi, I&#39;m Jackson</h1>
    <p>
      Send me an
      <ExternalLink
        to="mailto:jacksondburnette@gmail.com"
        text="email"
      />
      if you would like to get in touch, head to the
      <InternalLink
        to="/about/"
        text="about"
      />
      page to find out a little bit more about me and check out my
      <InternalLink
        to="/resume/"
        text="resume"
      />
    </p>
  </Layout>
);

export default index;
