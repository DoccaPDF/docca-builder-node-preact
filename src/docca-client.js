import request from 'request';

export function renderDocument ({ apiUrl, apiKey, doc, images, timeout = 10000, res }) {
  const params = {
    url: `${apiUrl}/render/document`,
    auth: { user: apiKey },
    timeout,
    formData: {
      src: doc,
      image: images
    }
  };

  request.post(params, (error, response, body) => {
    if (error) {
      return res.status(500).send(error.message);
    }
  }).pipe(res);
}
