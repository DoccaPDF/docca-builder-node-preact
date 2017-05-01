import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
    tag { flow: column; font-size: 12 }
    heading { font-size: 20; font-weight: bold }
    subHeading { extend: heading; font-size: 14 }
`;

const eg = `

  <tag>
    Tag Text
    <heading>Heading</heading>
    <subHeading>Subheading</subHeading>
  </tag>
`;

const preStyle = `<style>${style}</style>`;

const Style = () => (
  <sub-page index='Style'>
    <style>{style}</style>
    <Header>Style</Header>
    <p>Styles control most of the layout of a document. There are some special tags which cannot be emulated with styles though.</p>
    <p>Styles can be applied to tags or classes as with regular CSS.</p>
    <p>Styles can be extended unlike regular CSS.</p>
    <Pre>{preStyle}{eg}</Pre>
    <EG>{eg}</EG>
  </sub-page>
);

export default Style;
