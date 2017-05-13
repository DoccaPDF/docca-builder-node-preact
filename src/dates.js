import _map from 'lodash/map';
import _padStart from 'lodash/padStart';
import moment from 'moment';

/**
 * returns a date formatted for inclusion in PDF info
 *
 * @param {Date} date
 * @returns {String}
 */
export function getPDFInfoDate (date) {
  const parts = _map(['Date', 'Hours', 'Minutes', 'Seconds'], part =>
    _padStart(date[`getUTC${part}`](), 2, '0')
  );
  parts.unshift(_padStart(date.getUTCMonth() + 1, 2, '0'));
  parts.unshift(date.getUTCFullYear());
  return `${parts.join('')}Z`;
}

export function formatTimestamp ({ timestamp, format = 'D MMM YYYY hh:mmA ZZ', utcOffset }) {
  const time = moment(timestamp);
  time.utcOffset(utcOffset || timestamp);
  return time.format(format);
}

export function DateFormatter ({ utcOffset, format }) {
  return (timestamp) => {
    return formatTimestamp({ timestamp, utcOffset, format });
  };
}
