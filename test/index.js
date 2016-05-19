const $ = require('../main');

const test = require('jsmicro-test');

// Call function to give arguments
StartTest('first', 2, ['thrid']);

function StartTest() {
    // Run the isDate() Test.
    test($.isDate)
        .accept(new Date())
        .reject([])
        .reject('Test')
        .reject({})
        .reject(true)
        .reject(false)
        .reject(test.args(arguments))
        .queue(true);

    // Run the isNotDate() Test.
    test(isNotDate)
        .accept(10)
        .accept([])
        .accept('Test')
        .accept({})
        .accept(true)
        .accept(false)
        .accept(test.args(arguments))
        .reject(new Date())
        .queue(true);
}
