import { h } from 'preact';

const defaultStyle = `
  .pageNo { content: page_number }
  .pagesNo { content: total_pages }
`;

const PageNumbers = ({ style = defaultStyle }) => (
  <pageNo>
    <style>{style}</style>
    Page <text class='pageNo'>3</text> of <text class='pagesNo'>3</text>
  </pageNo>
);

export default PageNumbers;
