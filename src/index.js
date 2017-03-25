import fs from 'fs';
import request from 'request';
import render from 'preact-render-to-string';
import { h } from 'preact';

import Invoice from './components/invoice';

const DOCCA_API_URL = (process.env.DOCCA_API_URL.replace(/\/+$/, '') || `https://api.docca.io`);

export default function generatePDF ({ invoice, writeStream, apiKey }) {
  const imageStream = fs.createReadStream(`./image/${invoice.supplier.logo}`);
  const doc = render(<Invoice invoice={invoice} />);

  const req = {
    url: `${DOCCA_API_URL}/render/document`,
    auth: { user: apiKey },
    timeout: 10000,
    formData: {
      src: doc,
      image: [ imageStream ]
    }
  };

  return new Promise((resolve, reject) =>
    request.post(req, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      resolve(response.statusMessage);
    }).pipe(writeStream)
  );
}
