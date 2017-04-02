import { h } from 'preact';

const defaultStyle = `
  .pageNo { content: page_number }
  .pagesNo { content: total_pages }
`;

const PageNumbers = ({ style = defaultStyle }) => (
  <pageNo>
    <style>{style}</style>
    Page <text class='pageNo'>999</text> of <text class='pagesNo'>999</text>
  </pageNo>
);

export default PageNumbers;
