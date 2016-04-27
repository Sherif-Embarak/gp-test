var scale;

scale = function(obj) {
  var scaleobj;
  scaleobj = d3.scale[obj.type]();
  scaleobj = scaleobj["domain"](obj.domain);
  return scaleobj = scaleobj["range"](obj.range);
};

//# sourceMappingURL=sacle_test.js.map
