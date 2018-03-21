/**
 * Utility function - flattens and normalizes a data payload into a single collection
 *
 * @function
 * @public
 *
 * @param {object} data the data to be transformed
 *
 * @return {array}
 */
export function flattenPayload(data) {
  return Object.keys(data)
    .map(list => data[list].map(item => Object.assign({ list }, item)))
    .reduce((result, list) => result.concat(list), []);
}

export default {
  flattenPayload,
};
