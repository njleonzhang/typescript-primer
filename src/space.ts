// 跨文件的namespace在webpack里面是不能用的。
// https://github.com/TypeStrong/ts-loader/issues/193
namespace Space {
  export let x = 1
  export let y = '2'

  export interface T {

  }
}
