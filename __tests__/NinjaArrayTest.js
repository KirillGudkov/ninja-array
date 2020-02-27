export { default } from '../src/NinjaArray';

describe('Ninja-Array tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });

  test('last property should return actual last elements of array', () => {
    expect(array.last).toBe(9)
  });

  test('first property should return actual first elements of array', () => {
    expect(array.first).toBe(0)
  });

  test('isEmpty property should return false', () => {
    expect(array.isEmpty).toBeFalsy()
  });

  test('isEmpty property should return true after clearing', () => {
    array = [];
    expect(array.isEmpty).toBeTruthy()
  });

  test('isNotEmpty property should return true', () => {
    expect(array.isNotEmpty).toBeTruthy()
  });

  test('isNotEmpty property should return false after clearing', () => {
    array = [];
    expect(array.isNotEmpty).toBeFalsy()
  });

  test('get() should return right value', () => {
    expect(array.get(3)).toBe(3)
  });

  test('after insert() array must contain a right element at right position, and length should be increased by one', () => {
    expect(array.length).toBe(10);
    expect(array.get(4)).toBe(4);
    array.insert(50, 4);
    expect(array.get(4)).toBe(50);
    expect(array.get(5)).toBe(4);
    expect(array.length).toBe(11);
  });

  test('array.length should be 0 after clear()', () => {
    array.clear();
    expect(array.isEmpty).toBeTruthy()
  });

  test('remove(2) should decrease length by one', () => {
    expect(array.length).toBe(10);
    array.remove(2);
    expect(array.length).toBe(9);
  });

  test('remove(2) should remove element on position = 2', () => {
    expect(array.get(2)).toBe(2);
    array.remove(2);
    expect(array.get(2)).toBe(3);
  });

  test('remove(15) should do nothing, because it doesnt  exist', () => {
    expect(array.get(2)).toBe(2);
    array.remove(15);
    expect(array.get(2)).toBe(2);
  });

  test('remove(2, 3, 5) should remove element on position 2, 3 and 5', () => {
    expect(array.get(2)).toBe(2);
    expect(array.get(3)).toBe(3);
    expect(array.get(5)).toBe(5);
    array.remove(2, 3, 5);
    expect(array.get(2)).toBe(4);
    expect(array.get(3)).toBe(6);
    expect(array.get(5)).toBe(8);
  });

  test('remove(2, 5, 3) should remove element on position 2, 3 and 5 despite on order', () => {
    expect(array.get(2)).toBe(2);
    expect(array.get(3)).toBe(3);
    expect(array.get(5)).toBe(5);
    array.remove(2, 3, 5);
    expect(array.get(2)).toBe(4);
    expect(array.get(3)).toBe(6);
    expect(array.get(5)).toBe(8);
  });

  test('removeLast() should remove last element', () => {
    expect(array.last).toBe(9);
    array.removeLast();
    expect(array.last).toBe(8);
  });

  test('removeLast() with empty array should return empty array', () => {
    array.clear();
    expect(array.length).toBe(0);
    array.removeLast();
    expect(array.length).toBe(0);
  });

  test('removeLast(3) should remove 3 last elements', () => {
    expect(array.last).toBe(9);
    array.removeLast(3);
    expect(array.last).toBe(6);
  });

  test('removeLast(3) on empty array should return empty array', () => {
    array.clear();
    expect(array.length).toBe(0);
    array.removeLast(3);
    expect(array.length).toBe(0);
    expect(array.last).toBeUndefined();
  });

  test('removeFirst() should remove first element', () => {
    expect(array.first).toBe(0);
    array.removeFirst();
    expect(array.first).toBe(1);
  });

  test('removeFirst(3) should remove 3 first elements', () => {
    expect(array.first).toBe(0);
    array.removeFirst(3);
    expect(array.first).toBe(3);
  });

  test('popLast() should remove last element and return it', () => {
    expect(array.length).toBe(10);
    let a = array.popLast();
    expect(a).toBe(9);
    expect(array.length).toBe(9);
  });

  test('popLast() on empty array should return undefined', () => {
    array.clear();
    expect(array.popLast()).toBeUndefined();
  });

  test('popFirst() should remove first element and return it', () => {
    expect(array.length).toBe(10);
    let a = array.popFirst();
    expect(a).toBe(0);
    expect(array.length).toBe(9);
  });

  test('swap(1, 2) should swap elements at 1 and 2 positions', () => {
    expect(array.get(1)).toBe(1);
    expect(array.get(2)).toBe(2);
    array.swap(1, 2);
    expect(array.get(1)).toBe(2);
    expect(array.get(2)).toBe(1);
  });

  test('swap(1, 2) on empty array should do nothing', () => {
    array.clear();
    expect(array.length).toBe(0);
    array.swap(1, 2);
    expect(array.length).toBe(0);
  });

  test('swap(1, 2) on array = [1] should do nothing', () => {
    array = [1];
    expect(array.length).toBe(1);
    array.swap(1, 2);
    expect(array.length).toBe(1);
    expect(JSON.stringify(array)).toBe(JSON.stringify([1]));
  });

  test('contains(3) should return true', () => {
    expect(array.contains(3)).toBeTruthy();
  });

  test('contains(10) should return false', () => {
    expect(array.contains(10)).toBeFalsy();
  });

  test('contains(3) on empty array should return false', () => {
    array.clear();
    expect(array.contains(3)).toBeFalsy();
  });

  test('containsAll(1, 2, 3) should return true', () => {
    expect(array.containsAll(1, 2, 3)).toBeTruthy();
  });

  test('containsAll(1, 2, 10) should return false', () => {
    expect(array.containsAll(1, 2, 10)).toBeFalsy();
  });

  test('squash() should remove duplicates', () => {
    array = [1, 1, 2, 2, 3, 4, 5, 5];
    expect(JSON.stringify(array.squash())).toBe(JSON.stringify([1, 2, 3, 4, 5]));
  });

  test('merge(arr) should return the array with union of them', () => {
    expect(JSON.stringify(array.merge(['a', 'b']))).toBe(JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b']));
  });

  test('diff(arr) should return the array with difference of them', () => {
    expect(JSON.stringify(array.diff([1, 2, 3, 4, 5, 15]))).toBe(JSON.stringify([15, 0, 6, 7, 8, 9]));
  });
});
