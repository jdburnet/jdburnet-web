import React from 'react'

import Layout from '../components/Layout';
import { ExternalLink } from '../components/InlineLink';

export default () => (
  <Layout>
    <h1>about me</h1>
    <p>
      You can find me on
      <ExternalLink
        to="https://www.github.com/jdburnet"
        text="github"
      />
      and
      <ExternalLink
        to="https://www.linkedin.com/in/jackson-burnette-354363121"
        text="linkedin"
      />
    </p>
  </Layout>
);
