import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';

const eg = `

<index>
  <heading>Index</heading>

  <co index-el="pages">
    <ro index-el="page-link">
      <o><span index-el="page-title">Untitled Page</span></o>
      <ro class="items-right">
        <span index-el="page-number">999</span>
      </ro>
    </ro>
    <co index-el="page-marks">
      <ro index-el="mark-link">
        <o> - <span index-el="mark-title">Untitled</span></o>
      </ro>
    </co>
  </co>
</index>

<page index="My Page Title">
  <span id="anchor01" index="Anchor in Page"> Example Anchor in Page </span>
</page>
`;

const IndexPage = () => (
  <sub-page index='Index Page'>
    <Header>Index Page</Header>
    <co>
      <p>
        The <el>index</el> element and the <attr>index-el</attr> attribute can be used to generate an index page
        from <attr>index</attr> attributes added to <el>page</el> and <el>sub-page</el> tags, as used
        to generate the index for this document.
      </p>
      <span id='anchor01' index='Anchor in Page'> Example Anchor in Page </span>
    </co>
    <block>
      <Pre>{eg}</Pre>
    </block>
  </sub-page>
);

export default IndexPage;
