import { h } from 'preact';

const style = `
  eg {
    margin: 0 0 10 0;
    padding: 2;
    border: 1;
    border-color: lightblue;
    flow: column
  }
`;

const EG = ({ children }) => (
  <o>
    <style>{style}</style>
    <eg dangerouslySetInnerHTML={{ __html: children }} />
  </o>
);

export default EG;
