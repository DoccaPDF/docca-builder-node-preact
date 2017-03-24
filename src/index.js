import axios from 'axios';
import render from 'preact-render-to-string';
import { h } from 'preact';

import Invoice from './components/invoice';

const DOCCA_API_URL = process.env.DOCCA_API_URL || `https://api.docca.io/`;

function agent ({ writeStream, apiKey }) {
  const ua = axios.create({
    baseURL: DOCCA_API_URL,
    timeout: 5000,
    auth: { username: apiKey, password: '' },
    responseType: 'stream'
  });

  // Add a response interceptor
  ua.interceptors.response.use(
    response => {
      // write response to stream
      response.data.pipe(writeStream);
    },
    error => Promise.reject(error)
  );

  return ua;
}

export default function generatePDF ({ invoice, writeStream, apiKey }) {
  const doc = render(<Invoice invoice={invoice} />);
  const ua = agent({ writeStream, apiKey });
  return ua.post('/render/template', { template: doc });
}
