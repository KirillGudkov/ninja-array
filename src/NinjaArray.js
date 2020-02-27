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

Object.defineProperty(Array.prototype, 'insert', {
  value: function(element, position) {
    this.splice(position, 0, element)
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
    this.splice(this.length - count, this.length - 1);

    return this;
  }
});

Object.defineProperty(Array.prototype, 'removeFirst', {
  value: function(count = 1) {
    this.splice(0, count);

    return this;
  }
});

Object.defineProperty(Array.prototype, 'popLast', {
  value: function() {
    return this.splice(this.length - 1, this.length)[0];
  }
});

Object.defineProperty(Array.prototype, 'popFirst', {
  value: function() {
    return this.splice(0, 1)[0];
  }
});

Object.defineProperty(Array.prototype, 'swap', {
  value: function(a, b) {
    let temp = this[a];
    this[a] = this[b];
    this[b] = temp;
  }
});

Object.defineProperty(Array.prototype, 'contains', {
  value: function(element) {
    return this.indexOf(element) !== -1;
  }
});

Object.defineProperty(Array.prototype, 'containsAll', {
  value: function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      if (this.indexOf(elements[i]) === -1) {
        return false
      }
    }

    return true
  }
});

Object.defineProperty(Array.prototype, 'squash', {
  value: function() {
    let result = [];

    this.forEach(item => {
      if (result.indexOf(item) === -1) {
        result.push(item)
      }
    });

    return result
  }
});

Object.defineProperty(Array.prototype, 'merge', {
  value: function(array) {
    let result = [];

    array.forEach(item => {
      if (this.indexOf(item) === -1) {
        result.push(item)
      }
    });

    return this.concat(result);
  }
});

Object.defineProperty(Array.prototype, 'diff', {
  value: function(array) {
    let result = [];

    array.forEach(item => {
      if (this.indexOf(item) === -1) {
        result.push(item)
      }
    });

    this.forEach(item => {
      if (array.indexOf(item) === -1 && result.indexOf(item) === -1) {
        result.push(item)
      }
    });

    return result;
  }
});
