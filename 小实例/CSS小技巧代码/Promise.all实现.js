/*
手动实现Promise.all
Promise.all主要是接受多个promise，然后返回所有promise的执行结果数组，如果有reject状态的promise，返回第一个拒绝态的拒绝原因
*/
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let index = 0;
    let ret = [];
    if (promises.length == 0) {
      return resolve(ret)
    } else {
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then(
          (v) => {
            ret[i] = v;
            index++;
            if (index == promises.length) { resolve(ret) }
          }, (err) => {
            reject(err);
            return
          })
      }
    }
  })
}
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve('four'), 4000);
});
// var p5 = new Promise((resolve, reject) => {
//   reject('reject');
// });

Promise.all([p1, p2, p3, p4]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
});