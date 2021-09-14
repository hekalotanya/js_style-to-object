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
  const resultArray = [];

  const array = sourceString.split(';');

  array.forEach(element => {
    const newElement = element.split(':');

    resultArray.push(newElement);
  });

  const filterArray = resultArray.filter(item => item.length > 1);

  filterArray.forEach(element => {
    resultObject[element[0].trim()] = element[1].trim();
  });

  return resultObject;

  // resultArray.forEach(item => {
  //   resultObject[item[0]] = item[1];
  // });

  // return resultObject;
}

module.exports = convertToObject;
