const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type A = typeof tuple;

type TupleToObject<T extends readonly string[]> = {
  // 遍历数据类型值的方式
  [K in T[number]]:K
}

type result = TupleToObject<typeof tuple> 
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}