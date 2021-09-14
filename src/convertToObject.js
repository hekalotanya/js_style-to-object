'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const resultObject = {};

  sourceString
    .split(';')
    .map(element => element.split(':'))
    .filter(item => item.length > 1)
    .forEach(element => {
      resultObject[element[0].trim()] = element[1].trim();
    });

  return resultObject;
}

module.exports = convertToObject;
