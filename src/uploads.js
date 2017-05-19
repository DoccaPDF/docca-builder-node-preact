import fs from 'fs';

import _isArray from 'lodash/isArray';

/**
 * get readable streams for uploaded images
 *
 * @export
 * @param {Object} req  Express request
 * @returns {Array[ReadableStream]} image streams
 */
export function getImages (req) {
  if (!(req.files && req.files.image)) {
    return [];
  }
  let images = req.files.image;
  if (!_isArray(images)) {
    images = [images];
  }
  return images.map(image => fs.createReadStream(image.path));
}

/**
 * get data from an uploaded JSON file
 *
 * @export
 * @param {Object} req  Express request
 * @returns {Object}  parsed JSON data
 */
export function getData (req) {
  return new Promise((resolve, reject) => {
    fs.readFile(req.files.data[0].path, 'utf8', (error, json) => {
      if (error) {
        return reject(error);
      }
      let data;
      try {
        data = JSON.parse(json);
      } catch (error) {
        return reject(error);
      }
      return resolve(data);
    });
  });
}
