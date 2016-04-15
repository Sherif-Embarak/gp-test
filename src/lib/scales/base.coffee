class Scales
  actual_canvas: (canvas_obj) ->
     canvs={"width":0,"height":0}
     canvs.width =  canvas_obj.width - canvas_obj.padding.left - canvas_obj.margin.left - canvas_obj.margin.right - canvas_obj.padding.right
     canvs.height = canvas_obj.height- canvas_obj.padding.bottom - canvas_obj.margin.bottom - canvas_obj.margin.top - canvas_obj.padding.top
     canvs

  define_type: (scale_obj ,canv_obj , data) ->
    if(scale_obj.type == "linear")
      this.linear(scale_obj.domain.field,scale_obj.range , canv_obj , data)
    #if(scale_obj.type == "ordinal")
      #this.ordinal(scale_obj.domain.field,scale_obj.range , canv_obj , data)

  scaling: (scale_obj,canv_obj,data) ->
    ob={};
    for i in [0..scale_obj.length-1]
      if(scale_obj[i].name=="x")
        this.define_type(scale_obj ,canv_obj , data)
#      if (scale_obj[i].name == "y")
#        this.define_type(scale_obj ,canv_obj , data)


  linear: (name_field ,scale_range, canv_obj , data) ->
    result_obj={"field":"","scaled_values":[],"columns":[]}
    arr=this.get_field(name_field , data)
    scaled_data=[]
    result=d3.scale.linear.
              domain([d3.min(arr) , d3.max(arr)]).
              range([0 , canv_obj[scale_range]])
    i=0
    while i < arr.length
      scaled_data.push(result(arr[i]))
      i++;
    result_obj.field=name_field
    result_obj.columns=data.headers
    result_obj.scaled_values=scaled_data
    console.log(result_obj)




  get_field : (name_field, data) ->
    arr = []
    i = 0
    while i < data.length
      if data[i].name = name_field
        arr = data[i].values
      i++
    arr
