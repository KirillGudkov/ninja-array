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

  // Returns the element of array at the specified position
  get(position: number): T

  // Inserts element at specific position
  insert(element: T, position: number): void

  // Removes all items
  clear(): void

  // Removes item at the specified indices
  remove(...indices: number[]): T[]

  // Removes N last elements of the array
  // count = 1 by default.
  // You can omit the count if want to remove the last item
  removeLast(count: number): T[]

  // Removes N first elements of the array
  // count = 1 by default.
  // You can omit the count if want to remove the first item
  removeFirst(count: number): T[]

  // Removes and returns the last element of an array
  popLast(): T

  // Removes and returns the first element of an array
  popFirst(): T

  // Swaps elements at the specified indices
  swap(a: number, b: number): void

  // Returns true if array contains the specified element
  contains(element: T): boolean

  // Returns true if array contains all of specified elements
  containsAll(...elements: T[]): boolean

}

declare global {
  interface Array<T> extends ArrayClass<T> {}
}
