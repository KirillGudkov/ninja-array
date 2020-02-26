export {};

declare class ArrayClass<T> {

  // Returns last element of array
  get last(): T;

  // Returns first element of array
  get first(): T;

  // Returns true if length == 0
  get isEmpty(): boolean;

  // Returns true if length > 0
  get isNotEmpty(): boolean;

  // Returns the element of array at the specified index
  get(index: number): T

  // Removes all items
  clear(): void

  // Removes item at the specified indicies
  // for example [1, 2, 3, 4, 5, 6, 7].remove(5, 3, 1)
  // returns [1, 3, 5, 7]
  remove(...indices: number[]): T[]

  // Removes the last element of an array
  removeLast(): T[]

  // Removes the first element of an array
  removeFirst(): T[]

  // Removes the N first elements of an array
  removeFirst(count: number): T[]

  // Removes and returnes the last element of an array
  popLast(): T

  // Removes and returnes the first element of an array
  popFirst(): T

  // Swaps elements at the specified indicies
  swap(a: number, b: number): void

  // Returns true if array contains the specified element
  contains(element: T): boolean

  // Returns true if array contains all of specified elements
  containsAll(...elements: T[]): boolean

}

declare global {
  interface Array<T> extends ArrayClass<T> {}
}
