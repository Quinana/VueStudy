function testable(target) {
  target.isTestable = true;
  //也可以修改类的原型，
  target.prototype.isTestable = true
}
@testable
class MyTestableClass {}
// 上面的这一句等同于 MyTestableClass = testable(MyTestableClass)
console.log(MyTestableClass.isTestable) // true