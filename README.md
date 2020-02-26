# Extended Array

### Installation:
- Add `"extended-array": "github:KirillGudkov/extended-array.git"` to your `package.json`

### Usage
- add `export { default } from 'extended-array';` to top of your root `index.js`
- You're perfect!

All extensions are available and TypeScript suggestions works! :)

### Available things:
```typescript
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

  // Removes item at the specified indices
  remove(...indices: number[]): T[]

  // Removes the last element of an array
  removeLast(): T[]

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
```
