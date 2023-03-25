// js

function receivesAFunction(callback) {
    // take a callback function as an argument
    // call the callback function
    // it doesn't matter what this function returns, so long as it calls
    // the callback function
    callback();
}

function returnsANamedFunction() {
    // take no arguments
    // return a named function
    return 0;
}

function returnsAnAnonymousFunction() {
    // take no arguments
    // return an anonymous function
    return 0;
}


