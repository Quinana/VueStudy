// 柯里化
// 他接收函数A作为参数，运行后能够返回一个新的函数。并且这个新的函数能够处理函数A的剩余参数。
function curry (fn) {
  const ctx = this;
  function inner (...args) {
    if (args.length === fn.length) return fn.call(ctx, ...args);
    return (...innerArgs) => inner.call(ctx, ...args, ...innerArgs);
  }

  return inner;
}

// test
function test (a, b, c) {
  console.log(a, b, c);
}
let _test = curry(test)

_test(1)(2)(3)
_test(2)(5)(9)