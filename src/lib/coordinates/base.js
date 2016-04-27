var Coordinate;

Coordinate = (function() {
  function Coordinate() {}

  Coordinate.prototype.axis = function(data, axis_object, canvas_obj) {
    var axis_obj, field, i, scale;
    scale = new Scales;
    axis_obj = {
      "type": "",
      "orientation": "",
      "values": [],
      "min": 0,
      "max": 0,
      "margin": 0,
      "height": 0,
      "width": 0,
      "grid": false
    };
    field = scale.get_field(axis_object.field, data);
    scale = d3.scale.linear().domain([0, axis_object.ticks]).range([d3.min(field), d3.max(field)]);
    i = 0;
    while (i < axis_object.ticks) {
      axis_obj.values.push(scale(i));
      i++;
    }
    axis_obj.min = d3.min(field);
    axis_obj.max = d3.max(field);
    axis_obj.height = canvas_obj.height;
    axis_obj.width = canvas_obj.width;
    axis_obj.margin = canvas_obj.margin;
    axis_obj.grid = axis_object.grid;
    axis_obj.orientation = axis_object.orientation;
    axis_obj.type = axis_object.type;
    return axis_obj;
  };

  return Coordinate;

})();

//# sourceMappingURL=base.js.map
