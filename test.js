var zdggzc = function (s1, s2)​ {
  let l1 = s1.length,
    l2 = s2.length,
    ret = '';
  for (let i = 0; i < l1; i++)​ {
    for (let j = 0; j < l2; j++)​ {
      if (s1[i] == s2[j])​ {
        for (let k = i; k < l1; k++)​ {
          if (s1[k] != s2[k])​​ {
            if (k - i - 1 > ret.length)​ {
              ret = s1.slice(i, k)​​
              console.log(ret)
            }​
            break;​
          }​
        }​
      }​
    }​
  }
  return ret​​
}
console.log(zdggzc('abcsdg', 'gwegewsds'))