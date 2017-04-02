import { h } from 'preact';

const style = `
  pre {
    margin: 0 0 10 0; padding: 5 5 5 5; border: 1; border-color: lightgrey;
    width: 100%
  }
`;

const Pre = ({ children }) => (
  <o>
    <style>{style}</style>
    <pre dangerouslySetInnerHTML={{ __html: children }} />
  </o>
);

export default Pre;
