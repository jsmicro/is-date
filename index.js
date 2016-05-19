(function() {
    'use strict';

    if (!window.hasOwnProperty('isDate')) window.isDate = isDate;
    if (!window.hasOwnProperty('isNotDate')) window.isNotDate = isNotDate;

    function isDate(object) {
        return toString.call(object) === '[object Date]';
    }

    function isNotDate(object) {
        return !isDate(object);
    }
})();
