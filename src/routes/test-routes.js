import render from '../render';
import { renderDocument } from '../docca-client';

import * as tests from '../components/docca/test';

export default function initRoutes ({ app, log, apiUrl, apiKey, timeout }) {
  app.get('/test/:test', (req, res) => {
    const doc = render(tests[req.params.test]());
    console.log(doc);
    renderDocument({ apiUrl, apiKey, doc, timeout, res });
  });
}
