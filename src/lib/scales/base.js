var Scales,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Scales = (function() {
  var result, returned_line;

  function Scales() {
    this.compose_values = bind(this.compose_values, this);
    this.get_field = bind(this.get_field, this);
    this.line_to_drow = bind(this.line_to_drow, this);
    this.mk_line = bind(this.mk_line, this);
    this.d3_scale = bind(this.d3_scale, this);
    this.scaling = bind(this.scaling, this);
    this.define_type = bind(this.define_type, this);
  }

  result = [];

  Scales.prototype.actual_canvas = function(canvas_obj) {
    var canvs;
    canvs = {
      "width": 0,
      "height": 0,
      "margin": 0
    };
    canvs.width = canvas_obj.width;
    canvs.height = canvas_obj.height;
    canvs.margin = canvas_obj.margin.bottom;
    return canvs;
  };

  Scales.prototype.define_type = function(scale_obj, canv_obj, data) {
    if (scale_obj.type) {
      return this.d3_scale(scale_obj.type, scale_obj.domain.field, scale_obj.range, canv_obj, data);
    }
  };

  Scales.prototype.scaling = function(scale_obj, canv_obj, data) {
    var i;
    i = 0;
    while (i < scale_obj.length) {
      if (scale_obj[i].name === "x") {
        this.define_type(scale_obj[i], canv_obj, data);
        i++;
      } else {
        this.define_type(scale_obj[i], canv_obj, data);
        i++;
      }
    }
    return result;
  };

  returned_line = [];

  Scales.prototype.d3_scale = function(scale_type, name_field, scale_range, canv_obj, data) {
    var all_values, arr, i, j, resultX, resultY, result_obj, scaled_data_x, scaled_data_y, scaled_obj;
    scaled_obj = {
      "scaled_data_x": [],
      "scaled_data_y": [],
      "data_arr": [],
      "canvs_obj": {}
    };
    all_values = this.compose_values(data);
    result_obj = {
      "field": "",
      "scaled_values": [],
      "rows": []
    };
    arr = this.get_field(name_field, data);
    scaled_data_y = [];
    if (scale_type === "time") {
      resultY = d3[scale_type].scale();
    } else {
      resultY = d3.scale[scale_type]();
    }
    resultY = resultY["domain"]([d3.min(all_values), d3.max(all_values)]);
    resultY = resultY["range"]([canv_obj["height"] - canv_obj["margin"], canv_obj["margin"]]);
    i = 0;
    while (i < arr.length) {
      scaled_data_y.push(resultY(arr[i]));
      i++;
    }
    result_obj.field = name_field;
    result_obj.rows = data.rows_name;
    result_obj.scaled_values = scaled_data_y;
    scaled_data_x = [];
    if (scale_type === "time") {
      resultX = d3[scale_type].scale();
    } else {
      resultX = d3.scale[scale_type]();
    }
    resultX = resultX["domain"]([0, result_obj.rows.length - 1]);
    resultX = resultX["range"]([canv_obj["margin"], canv_obj["width"] - canv_obj["margin"]]);
    j = 0;
    while (j < result_obj.scaled_values.length) {
      scaled_data_x.push(resultX(j));
      j++;
    }
    scaled_obj.scaled_data_x = scaled_data_x;
    scaled_obj.scaled_data_y = scaled_data_y;
    scaled_obj.data_arr = arr;
    scaled_obj.canvs_obj = canv_obj;
    result.push(scaled_obj);
    return scaled_obj;
  };

  Scales.prototype.mk_line = function(scaled_obj, color) {
    var k, line, path;
    line = [];
    k = 0;
    while (k < scaled_obj.data_arr.length - 1) {
      path = {
        "startX": 0,
        "startY": 0,
        "endX": 0,
        "endY": 0,
        "color": color,
        "width": 0
      };
      path.startY = scaled_obj.scaled_data_y[k];
      path.startX = scaled_obj.scaled_data_x[k];
      path.endX = scaled_obj.scaled_data_x[k + 1];
      path.endY = scaled_obj.scaled_data_y[k + 1];
      line.push(path);
      k++;
    }
    returned_line.push(line);
    console.log(returned_line);
    return returned_line;
  };

  Scales.prototype.line_to_drow = function() {
    return returned_line;
  };

  Scales.prototype.get_field = function(name_field, data) {
    var arr, i;
    arr = [];
    i = 0;
    while (i < data.columns_name.length) {
      if (data.columns_name[i] === name_field) {
        arr = data.columns[i - 1];
      }
      i++;
    }
    return arr;
  };

  Scales.prototype.compose_values = function(data) {
    var arr, i;
    arr = [];
    i = 0;
    while (i < data.columns.length) {
      arr = arr.concat(data.columns[i]);
      i++;
    }
    return arr;
  };

  return Scales;

})();

//# sourceMappingURL=base.js.map
