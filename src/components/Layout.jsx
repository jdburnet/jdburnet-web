import React from 'react';
import { css } from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header'
import { rhythm } from '../utils/typography';


export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        className={css`
          margin: 0 auto;
          maxwidth: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Header title={data.site.siteMetadata.title} />
        {children}
      </div>
    )}
  />
);
