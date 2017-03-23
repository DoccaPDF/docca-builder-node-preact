import axios from 'axios';
import render from 'preact-render-to-string';
import { h } from 'preact';

import Invoice from './components/invoice';

function agent ({ writeStream, apiKey }) {
  const ua = axios.create({
    // baseURL: 'https://api.docca.io/',
    baseURL: 'http://dev-api.docca.io/',
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
