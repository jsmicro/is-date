'use strict';

if (!global.hasOwnProperty('isDate')) global.isDate = isDate;
if (!global.hasOwnProperty('isNotDate')) global.isNotDate = isNotDate;

/**
 * Check does the given javascript object is a Date.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isDate(object) {
    return toString.call(object) === '[object Date]';
}

/**
 * Check does the given javascript object is not a Date.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotDate(object) {
    return !isDate(object);
}

module.exports = {isDate, isNotDate};
