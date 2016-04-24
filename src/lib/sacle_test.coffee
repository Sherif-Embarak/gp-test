#{"type" : "linear", "domain" : [1000,4000], "range" : [35,350]}
scale = (obj) ->
  scaleobj = d3.scale[obj.type]()
  scaleobj = scaleobj["domain"](obj.domain)
  scaleobj = scaleobj["range"](obj.range)