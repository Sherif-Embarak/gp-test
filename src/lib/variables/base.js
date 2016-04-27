var Variable,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Variable = (function() {
  function Variable() {
    this.quotient = bind(this.quotient, this);
    this.prod = bind(this.prod, this);
    this.diff = bind(this.diff, this);
    this.sum = bind(this.sum, this);
    this.cut = bind(this.cut, this);
    this.prank = bind(this.prank, this);
    this.rank = bind(this.rank, this);
    this.sort_d = bind(this.sort_d, this);
    this.sort_a = bind(this.sort_a, this);
    this.mode = bind(this.mode, this);
    this.median = bind(this.median, this);
    this.mean = bind(this.mean, this);
    this.pow = bind(this.pow, this);
    this.sign = bind(this.sign, this);
    this.atanh = bind(this.atanh, this);
    this.atan = bind(this.atan, this);
    this.acos = bind(this.acos, this);
    this.asin = bind(this.asin, this);
    this.tan = bind(this.tan, this);
    this.cos = bind(this.cos, this);
    this.sin = bind(this.sin, this);
    this.exp = bind(this.exp, this);
    this.log = bind(this.log, this);
  }

  Variable.prototype.transform = function(transform_obj) {
    return transform_obj;
  };

  Variable.prototype.arrayChecker = function(arr) {
    var key, ref, value, varName;
    varName = "";
    ref = Lib.prototype.varset;
    for (key in ref) {
      value = ref[key];
      if (arrayEqual(arr, value)) {
        varName = key;
      }
    }
    return varName;
  };

  Variable.prototype.log = function(arr) {
    var LogArray, num, varName;
    LogArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.log(num));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_log'] = LogArray;
      return variables;
    } else {
      return LogArray;
    }
  };

  Variable.prototype.exp = function(arr) {
    var ExpArray, num, varName;
    ExpArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.exp(num));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_exp'] = ExpArray;
      return variables;
    } else {
      return ExpArray;
    }
  };

  Variable.prototype.sin = function(arr) {
    var SinArray, num, varName;
    SinArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.sin(num));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_sin'] = SinArray;
      return variables;
    } else {
      return SinArray;
    }
  };

  Variable.prototype.cos = function(arr) {
    var CosArray, num, varName;
    CosArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.cos(num));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_cos'] = CosArray;
      return variables;
    } else {
      return CosArray;
    }
  };

  Variable.prototype.tan = function(arr) {
    var TanArray, num, varName;
    TanArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.tan(num));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_tan'] = TanArray;
      return variables;
    } else {
      return TanArray;
    }
  };

  Variable.prototype.asin = function(arr) {
    var AsinArray, num, varName;
    AsinArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.asin(num));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_asin'] = AsinArray;
      return variables;
    } else {
      return AsinArray;
    }
  };

  Variable.prototype.acos = function(arr) {
    var AcosArray, num, varName;
    AcosArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.acos(num));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_acos'] = AcosArray;
      return variables;
    } else {
      return AcosArray;
    }
  };

  Variable.prototype.atan = function(arr) {
    var AtanArray, num, varName;
    AtanArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.atan(num));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_atan'] = AtanArray;
      return variables;
    } else {
      return AtanArray;
    }
  };

  Variable.prototype.atanh = function(arr) {
    var AtanhArray, num, varName;
    AtanhArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.atanh(num));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_atanh'] = AtanhArray;
      return variables;
    } else {
      return AtanhArray;
    }
  };

  Variable.prototype.sign = function(arr) {
    var SignArray, num, varName;
    SignArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(num >= 0 ? 1 : -1);
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_sign'] = SignArray;
      return variables;
    } else {
      return SignArray;
    }
  };

  Variable.prototype.pow = function(arr, pow) {
    var PowArray, num, varName;
    PowArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        num = arr[i];
        results.push(Math.pow(num, pow));
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_pow'] = PowArray;
      return variables;
    } else {
      return PowArray;
    }
  };

  Variable.prototype.mean = function(arr) {
    var Count, Sum, varName;
    Sum = arr.reduce((function(a, b) {
      return a + b;
    }), 0);
    Count = arr.length;
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_mean'] = Sum / Count;
      return variables;
    } else {
      return Sum / Count;
    }
  };

  Variable.prototype.median = function(arr) {
    var index, varName;
    index = Math.floor(arr.length / 2);
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_median'] = arr[index];
      return variables;
    } else {
      return arr[index];
    }
  };

  Variable.prototype.mode = function(arr) {
    var frequency, i, len, max, result, v, varName;
    frequency = {};
    max = 0;
    result;
    for (i = 0, len = arr.length; i < len; i++) {
      v = arr[i];
      frequency[arr[v]] = (frequency[arr[v]] || 0) + 1;
      if (frequency[arr[v]] > max) {
        max = frequency[arr[v]];
        result = arr[v];
      }
    }
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_mode'] = result;
      return variables;
    } else {
      return result;
    }
  };

  Variable.prototype.sort_a = function(arr) {
    var modifiedArray, sortAarray, varName;
    modifiedArray = arr.slice(0);
    sortAarray = modifiedArray.sort(function(a, b) {
      return a - b;
    });
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_sort_a'] = sortAarray;
      return variables;
    } else {
      return sortAarray;
    }
  };

  Variable.prototype.sort_d = function(arr) {
    var modifiedArray, sortAarray, varName;
    modifiedArray = arr.slice(0);
    sortAarray = modifiedArray.sort(function(a, b) {
      return b - a;
    });
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_sort_d'] = sortAarray;
      return variables;
    } else {
      return sortAarray;
    }
  };

  Variable.prototype.rank = function(arr) {
    var modifiedArray, ranks, sorted, varName;
    modifiedArray = arr.slice(0);
    sorted = modifiedArray.slice().sort(function(a, b) {
      return b - a;
    });
    ranks = modifiedArray.slice().map(function(v) {
      return sorted.indexOf(v) + 1;
    });
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_rank'] = ranks;
      return variables;
    } else {
      return ranks;
    }
  };

  Variable.prototype.prank = function(arr) {
    var num, prankArray, sortedArray, varName;
    sortedArray = statistical.sort_a(arr, false);
    prankArray = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = sortedArray.length; i < len; i++) {
        num = sortedArray[i];
        results.push((num - .5) / sortedArray.length);
      }
      return results;
    })();
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_prank'] = prankArray;
      return variables;
    } else {
      return prankArray;
    }
  };

  Variable.prototype.cut = function(arr, cuts) {
    var arrays, modifiedArray, varName;
    modifiedArray = arr.slice(0);
    arrays = [];
    while (modifiedArray.length > 0) {
      arrays.push(modifiedArray.splice(0, cuts));
    }
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_cut'] = arrays;
      return variables;
    } else {
      return arrays;
    }
  };

  Variable.prototype.sum = function(arr) {
    var Sum, varName;
    Sum = arr.reduce((function(a, b) {
      return a + b;
    }), 0);
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_sum'] = Sum;
      return variables;
    } else {
      return Sum;
    }
  };

  Variable.prototype.diff = function(arr) {
    var i, initial, len, modifiedArray, num, varName;
    initial = arr[0];
    modifiedArray = arr.slice(1);
    for (i = 0, len = modifiedArray.length; i < len; i++) {
      num = modifiedArray[i];
      initial = initial - num;
    }
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_diff'] = initial;
      return variables;
    } else {
      return initial;
    }
  };

  Variable.prototype.prod = function(arr) {
    var i, initial, len, modifiedArray, num, varName;
    initial = arr[0];
    modifiedArray = arr.slice(1);
    for (i = 0, len = modifiedArray.length; i < len; i++) {
      num = modifiedArray[i];
      initial = initial * num;
    }
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_prod'] = initial;
      return variables;
    } else {
      return initial;
    }
  };

  Variable.prototype.quotient = function(arr) {
    var i, initial, len, modifiedArray, num, varName;
    initial = arr[0];
    modifiedArray = arr.slice(1);
    for (i = 0, len = modifiedArray.length; i < len; i++) {
      num = modifiedArray[i];
      initial = initial / num;
    }
    if (append) {
      varName = arrayChecker(arr);
      varset[varName + '_quotient'] = initial;
      return variables;
    } else {
      return initial;
    }
  };

  return Variable;

})();

//# sourceMappingURL=base.js.map
