// @target: es6
// @noImplicitAny: true
const y = undefined;

function f<T>(x: T): T { return x; }
const x = f(undefined);
