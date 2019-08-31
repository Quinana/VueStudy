//基于setInterval实现
var n = 0;
function setColor () {
  if (n % 3 == 0) { console.log('red') }
  else if (n % 3 == 1) { console.log('yellow') }
  else { console.log('green') }
  n++;
}
// setInterval(function () { setColor() }, 1000);

//基于Promise实现
async function ryg (color, duration) {
  console.log(color)
  await new Promise(function (resolve) {
    setTimeout(resolve, duration);
  })
}

async function run () {
  while (true) {
    await ryg('red', 1000)
    await ryg('yellow', 2000)
    await ryg('green', 5000)
  }
}
run()