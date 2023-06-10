/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/quotes */
import type { Equal, Expect } from "@type-challenges/utils"

type MyPick<TObj, K extends keyof TObj> = {
  [SpecificKey in K]: TObj[SpecificKey]
}

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
