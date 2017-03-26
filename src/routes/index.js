import fs from 'fs';
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

  app.post('/invoice-local-logo', (req, res) => {
    const invoice = req.body.invoice;
    const doc = render(<Invoice invoice={invoice} />);
    if (invoice.supplier.logo) {
      fs.stat(`./image/${invoice.supplier.logo}`, (err, stat) => {
        if (err) {
          log.error(err);
          res.status(500);
        }
        if (!stat || stat.size < 1) {
          log.error({ image: invoice.supplier.logo }, 'image not found in image directory');
          return res.status(404).send(`Not Found: ${invoice.supplier.logo}`);
        }
        const images = [fs.createReadStream(`./image/${invoice.supplier.logo}`)];
        renderDocument({ apiUrl, apiKey, doc, images, timeout, res });
      });
    } else {
      renderDocument({ apiUrl, apiKey, doc, timeout, res });
    }
  });
}
