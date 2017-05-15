import fs from 'fs';
import { h } from 'preact';
import Stripe from 'stripe';
import Copin from 'copin';

import render from '../../render';
import { renderDocument } from '../../docca-client';

import StripeInvoice from '../../components/stripe';

const config = Copin();

export default function initRoutes ({ app, log, apiUrl, apiKey, timeout }) {
  /**
   * generate an invoice from an invoice ID
   */
  app.get('/stripe/invoice/:invoiceId', (req, res) => {
    const { invoiceId } = req.params;

    const stripe = Stripe(config.stripe.test.api_key);
    return stripe.invoices.retrieve(invoiceId)
    .then(invoice =>
      stripe.customers.retrieve(invoice.customer)
      .then(customer => ({ invoice, customer }))
    ).then(data => {
      data.supplier = config.supplier;
      const doc = render(<StripeInvoice data={data} />);
      const images = [fs.createReadStream(`./demo/images/logo.png`)];
      renderDocument({ apiUrl, apiKey, doc, images, timeout, res });
    })
    .catch(error => {
      console.error(error);
      res.send(error);
    });
  });
}
