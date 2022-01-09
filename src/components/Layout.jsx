/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import { rhythm } from '../utils/typography';

const layout = ({ children }) => (
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
    render={(data) => (
      <div
        css={css`
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

export default layout;
