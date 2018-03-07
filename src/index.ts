import callPeople from './callPeople'
import { cons } from './j' // 引用js
import * as frameworks from './frameworks/index'
import { React, Vue } from './frameworks/index'
import { DataTablesServer } from 'vue-data-tables' // 为vue-data-tables写了一个d.ts声明文件，否则此处无法导入

var leon = {
  firstName: 'zhang'
}

callPeople(leon)

console.log(cons)

try {
  // 跨文件的namespace在webpack里面是不能用的。
  // https://github.com/TypeStrong/ts-loader/issues/193
  console.log(Space.x, Space.y, Space.z, frameworks)
} catch (e) {
  console.log(e)
}

new React()
new Vue()

console.log(DataTablesServer)

export default 1 > 0
