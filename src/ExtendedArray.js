Array.prototype.remove = (...indices) => {
  indices.sort().forEach((index, current) => {
    Array.prototype.splice(index - current, 1);
  });

  return Array.prototype;
};

Object.defineProperty(Array.prototype, 'isEmpty', {
  get: function isEmpty() {
    return this.length === 0;
  }
});

Object.defineProperty(Array.prototype, 'isNotEmpty', {
  get: function isNotEmpty() {
    return this.length > 0;
  }
});

Object.defineProperty(Array.prototype, 'last', {
  get: function last() {
    return this[this.length - 1];
  }
});

Object.defineProperty(Array.prototype, 'first', {
  get: function first() {
    return this[0];
  }
});

