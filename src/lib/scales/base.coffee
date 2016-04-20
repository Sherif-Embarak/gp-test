class Scales
  result=[]
  actual_canvas: (canvas_obj) ->
     canvs={"width":0,"height":0, "margin":0}
     canvs.width =  canvas_obj.width
     canvs.height = canvas_obj.height
     canvs.margin = canvas_obj.margin.bottom
     canvs

  define_type: (scale_obj ,canv_obj , data) =>
    if scale_obj.type
     eval 'this.'+scale_obj.type+'(scale_obj.domain.field, scale_obj.range, canv_obj, data);'

  scaling: (scale_obj,canv_obj,data) =>
    i=0
    while i<scale_obj.length
      if(scale_obj[i].name=="x")
        @define_type(scale_obj[i] ,canv_obj , data)
        i++
      else
        @define_type(scale_obj[i] ,canv_obj , data)
        i++
    result

  returned_line=[]
  linear: (name_field ,scale_range, canv_obj , data) =>
    scaled_obj={"scaled_data_x":[],"scaled_data_y":[],"data_arr":[],"canvs_obj":{}}
    all_values=@compose_values(data)
    result_obj={"field":"","scaled_values":[],"columns":[]}
    arr=@get_field(name_field , data)
    scaled_data_y=[]

    resultY=d3.scale.linear().domain([d3.min(all_values) ,d3.max(all_values)]).range([canv_obj["height"] - canv_obj["margin"] , canv_obj["margin"] ])
    i=0
    while i < arr.length
      scaled_data_y.push(resultY(arr[i]))
      i++;
    result_obj.field=name_field
    result_obj.columns=data[0].headers
    result_obj.scaled_values=scaled_data_y
    #console.log scaled_data_y
    scaled_data_x=[]
    resultX=d3.scale.linear().domain([0,result_obj.columns.length-1]).range([canv_obj["margin"],canv_obj["width"] - canv_obj["margin"]])
    j=0
    while j < result_obj.columns.length
      scaled_data_x.push(resultX(j))
      j++;
    #console.log scaled_data_x
    scaled_obj.scaled_data_x=scaled_data_x
    scaled_obj.scaled_data_y=scaled_data_y
    scaled_obj.data_arr=arr
    scaled_obj.canvs_obj=canv_obj
    result.push(scaled_obj)
    scaled_obj




  mk_line:(scaled_obj,color)=>
    line = []
    k=0
    while k < scaled_obj.data_arr.length-1
      path={"startX":0,"startY":0,"endX":0,"endY":0,"color":color,"width":0}
      path.startY=scaled_obj.scaled_data_y[k]
      path.startX=scaled_obj.scaled_data_x[k]
      path.endX=scaled_obj.scaled_data_x[k+1]
      path.endY=scaled_obj.scaled_data_y[k+1]
      path.width=Math.abs(scaled_obj.data_arr[k+1])*(2/10000)*scaled_obj.canvs_obj["width"]
      line.push(path)
      k++
#    console.log line
    returned_line.push(line)
    returned_line


  line_to_drow:()=>
    returned_line





  get_field : (name_field, data) =>
    arr = []
    i = 0
    while i < data.length
      if data[i].name == name_field
        arr = data[i].values
      i++
    arr


  compose_values : (data) =>
    arr=[]
    i=0
    while i<data.length
      arr=arr.concat(data[i].values)
      i++
    arr
