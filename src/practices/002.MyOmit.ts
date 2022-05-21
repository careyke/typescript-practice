interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyExclude<T, U> = T extends U ? never : T;

type MyOmit<T extends Object, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P]
}

type MyOmitTodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: MyOmitTodoPreview = {
  completed: false,
}
