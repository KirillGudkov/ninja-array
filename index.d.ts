export {};

declare class NinjaArray<T> {

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
  // position = 0  by default
  insert(element: T, position?: number): void

  // Removes all items
  clear(): void

  // Removes item at the specified indices
  remove(...indices: number[]): T[]

  // Removes N last elements of the array
  // count = 1 by default.
  // You can omit the count if want to remove the last item
  removeLast(count?: number): T[]

  // Removes N first elements of the array
  // count = 1 by default.
  // You can omit the count if want to remove the first item
  removeFirst(count?: number): T[]

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

  // Returns array without duplicate
  // [1, 1, 2, 2] -> [1, 2]
  collapse(): T[]

  // Returns union of two arrays
  // [1, 2, 3].merge([4, 5]) -> [1, 2, 3, 4, 5]
  merge(array: Array<T>): T[]

  // Returns difference of two arrays
  // [1, 2].diff([1, 2, 3]) -> [3]
  diff(array: Array<T>): T[]

  // Returns true if arrays are identical, including order
  // [1, 2, 3] == [1, 2, 3], but [1, 2, 3] != [3, 2 ,1]
  identical(array: T[]): boolean

  // Returns true if arrays contents are equal, despite order
  // [1, 2, 3] == [1, 2, 3], but [1, 2, 3] == [3, 2 ,1]
  equal(array: T[]): boolean

}

declare global {
  interface Array<T> extends NinjaArray<T> {}
}
