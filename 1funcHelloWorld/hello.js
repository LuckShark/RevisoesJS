/**
 * @return {Function}
 */

var createHelloWorld = function() {
    
    return function() {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
*/

// Testando a função
const f = createHelloWorld();
console.log(f()); // "Hello World"
console.log(f({}, null, 42)); // "Hello World"