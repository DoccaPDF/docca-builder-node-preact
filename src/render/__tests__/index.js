import { h } from 'preact';

import render from '../index';

describe('pain points', () => {
  it('renders a link - no void elements', () => {
    const Link = () => (<link href='http://blah'>A Link</link>);
    const doc = render(<Link />);
    expect(doc).toEqual(`<link href="http://blah">A Link</link>`);
  });

  // can't fix this here, would have to modify h in preact
  // it.('leaves a space', () => {
  //   const Test = () => (
  //     <p>
  //       word <span>other</span>
  //       word
  //     </p>
  //   );
  //   const doc = render(<Test />);
  //   expect(doc).toEqual(`<p>word <span>other</span> word</p>`);
  // });
});
