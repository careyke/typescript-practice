interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<U extends Object,K extends keyof U> = {
  [P in K]: U[P];
}

type MyPickTodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: MyPickTodoPreview = {
    title: 'Clean room',
    completed: false,
}