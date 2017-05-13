import { h } from 'preact';

const style = `
  pre {
    margin: 0 0 10 0; padding: 5 5 5 5; border: 1; border-color: lightgrey;
    width: 100%
  }
`;

// const Pre = ({ children }) => (
//   <o>
//     <style>{style}</style>
//     <pre dangerouslySetInnerHTML={{ __html: children }} />
//   </o>
// );

const Pre = ({ children }) => {
  const mu = (
    <o>
      <style>{style}</style>
      <pre dangerouslySetInnerHTML={{ __html: children.join('') }} />
    </o>
  );
  // console.log(JSON.stringify({mu}, null, 2));
  return mu;
};

export default Pre;
