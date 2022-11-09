const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const


type result = typeof tuple[number]


type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}
