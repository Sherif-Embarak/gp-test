// Generated by CoffeeScript 1.10.0
(function() {
  var sequence, x,
    slice = [].slice;

  x = [6, 2, 3, 5, 4, 7, 8];

  sequence = function() {
    var input_array, key, result, temp, value;
    input_array = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    result = [];
    for (key in input_array) {
      value = input_array[key];
      temp = key;
      key = value;
      value = input_array[parseInt(temp) + 1];
      result.push([key, value]);
    }
    return result;
  };

  console.log(sequence.apply(null, x));

}).call(this);

//# sourceMappingURL=sequence.js.map
