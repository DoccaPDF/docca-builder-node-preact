import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
  tag { flow: column; font-size: 12 }
  heading { font-size: 20; font-weight: bold }
  subHeading { extend: heading; font-size: 14 }
`;

const ro = `
        <ro>
          <co> Column </co>
          <co> Column </co>
          <co> Column </co>
        </ro>
`;

const co = `
        <co>
          <ro> Row </ro>
          <ro> Row </ro>
          <ro> Row </ro>
        </co>
`;

const RoCo = () => (
  <newPage id='roAndCo'>
    <style>{style}</style>
    <Header>Rows and Columns (ro & co)</Header>
    <p>The elements in a row are laid out horizontally and the available space is divided up evenly between the elements.</p>
    <Pre>{ro}</Pre>
    <EG>{ro}</EG>
    <p>The elements in a column are laid out vertically.</p>
    <Pre>{co}</Pre>
    <EG>{co}</EG>
  </newPage>
);

export default RoCo;
