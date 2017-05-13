import fs from 'fs';
import { h } from 'preact';

import render from '../render';
import { renderDocument } from '../docca-client';

import Invoice from '../components/invoice';
import MarkupReference from '../components/docca/markup-reference';
import ChargifyStatement from '../components/chargify';

export default function initRoutes ({ app, log, apiUrl, apiKey, timeout }) {
  app.post('/invoice', (req, res) => {
    console.log({ body: req.body });
    const invoice = req.body.invoice;
    const doc = render(<Invoice invoice={invoice} />);
    renderDocument({ apiUrl, apiKey, doc, timeout, res });
  });

  app.get('/markup-reference', (req, res) => {
    const doc = render(<MarkupReference />);
    const images = [fs.createReadStream(`./demo/images/logo.png`)];
    renderDocument({ apiUrl, apiKey, doc, images, timeout, res });
  });

  app.post('/chargify-statement', (req, res) => {
    const data = req.body;
    const doc = render(<ChargifyStatement data={data} />);
    const images = [fs.createReadStream(`./demo/images/logo.png`)];
    renderDocument({ apiUrl, apiKey, doc, images, timeout, res });
  });

  app.post('/invoice-demo-logo', (req, res) => {
    const invoice = req.body.invoice;
    const doc = render(<Invoice invoice={invoice} />);
    if (invoice.supplier.logo) {
      fs.stat(`./demo/images/${invoice.supplier.logo}`, (err, stat) => {
        if (err) {
          log.error(err);
          res.status(500);
        }
        if (!stat || stat.size < 1) {
          log.error({ image: invoice.supplier.logo }, 'image not found in image directory');
          return res.status(404).send(`Not Found: ${invoice.supplier.logo}`);
        }
        const images = [fs.createReadStream(`./demo/images/${invoice.supplier.logo}`)];
        renderDocument({ apiUrl, apiKey, doc, images, timeout, res });
      });
    } else {
      renderDocument({ apiUrl, apiKey, doc, timeout, res });
    }
  });
}
