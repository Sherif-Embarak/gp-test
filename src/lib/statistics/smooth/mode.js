// Generated by CoffeeScript 1.10.0
(function() {
  var mode,
    slice = [].slice;

  mode = function() {
    var counter, i, input_array, j, max, ref, result;
    input_array = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    counter = 1;
    max = 0;
    result = input_array[0];
    input_array.sort();
    for (i = j = 1, ref = input_array.length - 1; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
      if (input_array[i] === input_array[i + 1]) {
        counter++;
        if (counter > max) {
          max = counter;
          result = input_array[i];
        } else {
          counter = 1;
        }
      }
    }
    return result;
  };

}).call(this);

//# sourceMappingURL=mode.js.map
