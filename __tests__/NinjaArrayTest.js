import '../src/NinjaArray';

describe('get properties tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });

  /**
   * get last() tests
   *
   */
  test('last property should return actual last elements of array', () => {
    expect(array.last).toBe(9)
  });

  /**
   * get first() tests
   *
   */
  test('first property should return actual first elements of array', () => {
    expect(array.first).toBe(0)
  });

  /**
   * get isEmpty() tests
   *
   */
  test('isEmpty property should return false', () => {
    expect(array.isEmpty).toBeFalsy()
  });

  test('isEmpty property should return true after clearing', () => {
    array = [];
    expect(array.isEmpty).toBeTruthy()
  });

  /**
   * get isNotEmpty() tests
   *
   */
  test('isNotEmpty property should return true', () => {
    expect(array.isNotEmpty).toBeTruthy()
  });

  test('isNotEmpty property should return false after clearing', () => {
    array = [];
    expect(array.isNotEmpty).toBeFalsy()
  });

});

describe('get() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should return right value', () => {
    expect(array.get(3)).toBe(3)
  });
});

describe('insert() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('after insert() array must contain a right element at right position, and length should be increased by one', () => {
    expect(array.length).toBe(10);
    expect(array.get(4)).toBe(4);
    array.insert(50, 4);
    expect(array.get(4)).toBe(50);
    expect(array.get(5)).toBe(4);
    expect(array.length).toBe(11);
  });

  test('after insert() empty array must contain only one element', () => {
    array = [];
    array.insert('element');
    expect(array.get(0)).toBe('element');
    expect(array.length).toBe(1);
  });
});

describe('clear() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('array.length should be 0 after clear()', () => {
    array.clear();
    expect(array.isEmpty).toBeTruthy()
  });
});

describe('remove() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should decrease length by one', () => {
    expect(array.length).toBe(10);
    array.remove(2);
    expect(array.length).toBe(9);
  });

  test('Should remove element on position = 2', () => {
    expect(array.get(2)).toBe(2);
    array.remove(2);
    expect(array.get(2)).toBe(3);
  });

  test('Should do nothing, because it doesnt exist', () => {
    expect(array.get(2)).toBe(2);
    array.remove(15);
    expect(array.get(2)).toBe(2);
  });

  test('Should remove element on position 2, 3 and 5', () => {
    expect(array.get(2)).toBe(2);
    expect(array.get(3)).toBe(3);
    expect(array.get(5)).toBe(5);
    array.remove(2, 3, 5);
    expect(array.get(2)).toBe(4);
    expect(array.get(3)).toBe(6);
    expect(array.get(5)).toBe(8);
  });

  test('Should remove element on position 2, 3 and 5 despite on order', () => {
    expect(array.get(2)).toBe(2);
    expect(array.get(3)).toBe(3);
    expect(array.get(5)).toBe(5);
    array.remove(2, 3, 5);
    expect(array.get(2)).toBe(4);
    expect(array.get(3)).toBe(6);
    expect(array.get(5)).toBe(8);
  });
});

describe('removeLast() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should remove last element', () => {
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

  test('Should remove 3 last elements', () => {
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
});

describe('removeFirst() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should remove first element', () => {
    expect(array.first).toBe(0);
    array.removeFirst();
    expect(array.first).toBe(1);
  });

  test('Should remove 3 first elements', () => {
    expect(array.first).toBe(0);
    array.removeFirst(3);
    expect(array.first).toBe(3);
  });
});

describe('popLast() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should remove last element and return it', () => {
    expect(array.length).toBe(10);
    let a = array.popLast();
    expect(a).toBe(9);
    expect(array.length).toBe(9);
  });

  test('popLast() on empty array should return undefined', () => {
    array.clear();
    expect(array.popLast()).toBeUndefined();
  });
});

describe('popFirst() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should remove first element and return it', () => {
    expect(array.length).toBe(10);
    let a = array.popFirst();
    expect(a).toBe(0);
    expect(array.length).toBe(9);
  });
});

describe('swap() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should swap elements at 1 and 2 positions', () => {
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
});

describe('contains() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should return true', () => {
    expect(array.contains(3)).toBeTruthy();
  });

  test('Should return false', () => {
    expect(array.contains(10)).toBeFalsy();
  });

  test('Should return false', () => {
    array.clear();
    expect(array.contains(3)).toBeFalsy();
  });
});

describe('containsAll() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should return true', () => {
    expect(array.containsAll(1, 2, 3)).toBeTruthy();
  });

  test('Should return false', () => {
    expect(array.containsAll(1, 2, 10)).toBeFalsy();
  });
});

describe('collapse() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should remove duplicates', () => {
    array = [1, 1, 2, 2, 3, 4, 5, 5];
    expect(JSON.stringify(array.collapse())).toBe(JSON.stringify([1, 2, 3, 4, 5]));
  });
});

describe('merge() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should return the array with union of them', () => {
    expect(JSON.stringify(array.merge(['a', 'b']))).toBe(JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b']));
  });
});

describe('diff() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should return the array with difference of them', () => {
    expect(JSON.stringify(array.diff([1, 2, 3, 4, 5, 15]))).toBe(JSON.stringify([15, 0, 6, 7, 8, 9]));
  });
});

describe('identical() test', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should return true, when arrays actually identical', () => {
    expect([1, 2, 3].identical([1, 2, 3])).toBeTruthy();
  });

  test('Should return false, when arrays not identical', () => {
    expect([1, 2, 3].identical([1, 2, 2])).toBeFalsy();
  });

  test('Should return false, when when length not equal', () => {
    expect([1, 2, 3].identical([1, 2])).toBeFalsy();
  });
});

describe('equal() tests', () => {
  let array;

  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  test('Should return true, when arrays actually equal', () => {
    expect([1, 2, 3].equal([1, 2, 3])).toBeTruthy();
  });

  test('Should return true, when arrays actually equal, despite order', () => {
    expect([1, 2, 3].equal([3, 2, 1])).toBeTruthy();
  });

  test('Should return false, when arrays not equal', () => {
    expect([1, 2, 3].equal([4, 2, 1])).toBeFalsy();
  });

  test('Should return false, when length not equal', () => {
    expect([1, 2, 3].equal([1, 2])).toBeFalsy();
  });
});
