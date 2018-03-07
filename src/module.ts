// typescript里有export或import的文件即是模块

export class Animal {
  constructor() {
    console.log('I am animal')
  }
}

// 而这么写似乎等价于定义一个namespace
export module TypePrimer {
  export class Duck extends Animal {
    constructor() {
      super()
      console.log('I am duck')
    }
  }
}

export namespace TypePrimer1 {
  export class Tiger extends Animal {
    constructor() {
      super()
      console.log('I am tiger')
    }
  }
}
