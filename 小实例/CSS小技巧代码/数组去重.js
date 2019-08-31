let arr = [1, 1, 1, 1, 5, 6, 2, 4, 5, 1, 2, 2, 2, 1, 1, 5]

//基于set去重
function qc1 (arr) {
  return Array.from(new Set(arr))
}

console.log(qc1(arr))

//循环+indexof
function qc2 (arr) {
  let arr1 = []
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    if (arr.indexOf(arr[i], i + 1) == -1) {
      arr1.push(arr[i])
    }
  }
  return arr1
}
console.log(qc2(arr))

//双重循环 splice原地删除
function qc3 (arr) {
  let l = arr.length;
  for (let i = 0; i < l - 1; i++) {
    for (let j = i + 1; j < l; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1)
        l--;
        j--;
      }
    }
  }
  return arr
}
console.log(qc3(arr))

//基于对象属性不可重复去重
function qc4 (arr) {
  let obj = {}, l = arr.length, arr1 = [];
  for (let i = 0; i < l; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      arr1.push(arr[i])
    }
  }
  return arr1
}
console.log(qc4(arr))

//forEach+index
function qc5 (arr) {
  let arr1 = []
  arr.forEach(
    (v, i, arr) => {
      if (arr.indexOf(v, i + 1) == -1) {
        arr1.push(v)
      }
    }
  )
  return arr1
}
console.log(qc5(arr))