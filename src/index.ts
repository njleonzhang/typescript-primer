import callPeople from './callPeople'
import { cons } from './j'
import * as frameworks from './frameworks/index'
import { React, Vue } from './frameworks/index'

var leon = {
  firstName: 'zhang'
}

callPeople(leon)

// Space来自于全局的namespace
console.log(Space.x, Space.y, Space.z, frameworks)

new React()
new Vue()

export default 1 > 0
