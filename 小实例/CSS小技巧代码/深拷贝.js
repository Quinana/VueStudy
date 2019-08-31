function deepClone1 (obj) {
  let ret = JSON.parse(JSON.stringify(obj))
  console.log(ret)
  return ret
}
var test = { name: 'aaa', data: [1, 2, [4, 5], { a: 'f' }], data2: null }
deepClone1(test)

//深拷贝 兼顾正则等其他格式类型
function deepClone (data) {
  var obj;
  if (Array.isArray(data)) {
    obj = [];
  } else if (Object.prototype.toString.call(data) === '[object Object') {
    obj = {};
  } else {
    return data;
  }
  if (Array.isArray(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
}
console.log(deepClone(test))