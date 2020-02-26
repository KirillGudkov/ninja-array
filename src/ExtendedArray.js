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

Object.defineProperty(Array.prototype, 'get', {
  value: function(i) {
    return this[i];
  }
});

Object.defineProperty(Array.prototype, 'clear', {
  value: function() {
    this.length = 0;
  }
});

Object.defineProperty(Array.prototype, 'remove', {
  value: function(...indices) {
    indices.sort().forEach((index, current) => {
      this.splice(index - current, 1);
    });

    return this;
  }
});

Object.defineProperty(Array.prototype, 'removeLast', {
  value: function(count = 1) {
    // todo
  }
});

Object.defineProperty(Array.prototype, 'removeFirst', {
  value: function(count = 1) {
    // todo
  }
});

Object.defineProperty(Array.prototype, 'popLast', {
  value: function() {
    // todo
  }
});

Object.defineProperty(Array.prototype, 'popFirst', {
  value: function() {
    // todo
  }
});

Object.defineProperty(Array.prototype, 'swap', {
  value: function(a, b) {
    // todo
  }
});

Object.defineProperty(Array.prototype, 'contains', {
  value: function(element) {
    // todo
  }
});

Object.defineProperty(Array.prototype, 'containsAll', {
  value: function(...elements) {
    // todo
  }
});
