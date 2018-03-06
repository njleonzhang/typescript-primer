import callPeople from './callPeople'
import { cons } from './j'
import * as frameworks from './frameworks/index'
import { React, Vue } from './frameworks/index'
import { DataTablesServer } from 'vue-data-tables'

var leon = {
  firstName: 'zhang'
}

callPeople(leon)

console.log(cons)

try {
  console.log(Space.x, Space.y, Space.z, frameworks)
} catch (e) {
  console.log(e)
}

new React()
new Vue()

console.log(DataTablesServer)

export default 1 > 0
