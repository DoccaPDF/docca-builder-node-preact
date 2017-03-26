import fs from 'fs';
import render from 'preact-render-to-string';
import { h } from 'preact';

import { renderDocument } from '../docca-client';

import Invoice from '../components/invoice';

export default function initRoutes ({ app, log, apiUrl, apiKey, timeout }) {
  app.post('/invoice', (req, res) => {
    const invoice = req.body.invoice;
    const doc = render(<Invoice invoice={invoice} />);
    const images = [];
    // if (invoice.supplier.logo) {
    //   images.push(fs.createReadStream(`./image/${invoice.supplier.logo}`));
    // }
    renderDocument({ apiUrl, apiKey, doc, images, timeout, res });
  });
}
