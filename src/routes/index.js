import render from 'preact-render-to-string';
import { h } from 'preact';

import { renderDocument } from '../docca-client';

import Invoice from '../components/invoice';

export default function initRoutes ({ app, log, apiUrl, apiKey, timeout }) {
  app.post('/invoice', (req, res) => {
    const invoice = req.body.invoice;
    const doc = render(<Invoice invoice={invoice} />);
    renderDocument({ apiUrl, apiKey, doc, timeout, res });
  });
}
