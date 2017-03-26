import request from 'request';

/**
 * render a document to PDF with docca.io
 *
 * @export
 * @param {String} apiUrl - url of the Docca API server
 * @param {String} apiKey - API Key for the Docca API server
 * @param {String} doc - Docca markup document
 * @param {Array} images - readStreams for images to be posted to the Docca API server
 * @param {Number} [timeout] - client timeput in miliseconds. Defaults to 10000
 * @param {Stream} res - the stream to pipe the PDF response to
 */
export function renderDocument ({ apiUrl, apiKey, doc, images = [], timeout = 10000, res }) {
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
