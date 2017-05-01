import { h } from 'preact';

const defaultStyle = ``;

const PageNumbers = ({ style = defaultStyle }) => (
  <page-numbers content='page-numbers'>
    <style>{style}</style>
    Page <span content='page-number'>999</span> of <span content='total-pages'>999</span>
  </page-numbers>
);

export default PageNumbers;
