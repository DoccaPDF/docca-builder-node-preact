import { h } from 'preact';

import MarkupReference from '../../components/docca/markup-reference';

import render from '../index';

describe('markup ref', () => {
  it('renders', () => {
    const doc = render(<MarkupReference />);
    expect(doc).toBeDefined();
  });
});
