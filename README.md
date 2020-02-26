# Ninja-Array
The main advantage of this package - is Array.prototype extension
and You don't need to use some specific object like `let a = new MySuperArray()`

And it is compatible with TypeScript. IDE will offer you available methods, 
including the following.

### Installation:
- run `yarn add ninja-array`

### Usage
- add `export { default } from 'ninja-array';` to top of your root `index.js`
- You're perfect!

### Available things:
```typescript
  // Returns last element of array
  last: T;

  // Returns first element of array
  first: T;

  // Returns true if length == 0
  isEmpty: boolean;

  // Returns true if length > 0
  isNotEmpty: boolean;

  // Returns the element of array at the specified position
  get(position: number): T

  // Inserts element at specific position
  insert(element: T, position: number): void

  // Removes all elements
  clear(): void

  // Removes elements at the specified indices
  remove(...indices: number[]): T[]

  // Removes N last elements of the array
  // count = 1 by default. 
  // You can omit the count if want to remove the last item
  removeLast(count: number = 1): T[]

  // Removes N first elements of the array
  // count = 1 by default. 
  // You can omit the count if want to remove the first item
  removeFirst(count: number = 1): T[]

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
  squash(): T[]

  // Returns union of two arrays
  // [1, 2, 3].merge([4, 5]) -> [1, 2, 3, 4, 5]
  merge(array: Array<T>): T[]

  // Returns difference of two arrays
  // [1, 2].diff([1, 2, 3]) -> [3]
  diff(array: Array<T>): T[]

```
