class Canvas_Geometry

class Line extends Canvas_Geometry


Line::draw = (obj)->
  for i in obj
    color = if (i.color is null || i.color is undefined )
      "#FF0000"
    else
      i.color
    width = if (i.width is null || i.width is undefined )
      1
    else
      i.width

    context.beginPath()
    context.moveTo(i.startX, i.startY)
    context.lineTo(i.endX, i.endY)
    context.strokeStyle = color
    context.lineWidth = width
    context.stroke()
    context.closePath()
    context.strokeStyle = "#000000"
    context.lineWidth = 1


class Diamond extends Canvas_Geometry

Diamond::draw = (obj)->
  for i in obj
    color = if (i.color is null || i.color is undefined )
      "#FF0000"
    else
      i.color

  cursorx = Math.log2(Math.sqrt(i.x))
  cursory = Math.log2(Math.sqrt(i.y))
  context.beginPath()
  context.moveTo(i.x, i.y-cursory)
  context.lineTo(i.x+cursorx, i.y)
  context.lineTo(i.x, i.y+cursory)
  context.lineTo(i.x - cursorx, i.y)
  context.lineTo(i.x, i.y-cursory)
  context.fillStyle = color
  context.fill()
  context.strokeStyle = color
  context.stroke()
  context.closePath()
  context.strokeStyle = "#000000"
  context.lineWidth = 1
  context.fillStyle = "#000000"


class Point extends Canvas_Geometry

Point::draw = (obj) ->
  for i in obj
    color = if (i.color is null || i.color is undefined )
      "#000000"
    else
      i.color
    fillColor = if (i.fillColor is null || i.fillColor is undefined )
      "#ffffff"
    else
      i.fillColor
    width = if (i.width is null || i.width is undefined )
      1
    else
      i.width
    radius = if (i.radius is null || i.radius is undefined )
      10
    else
      i.radius
    anticlockwise = if (i.anticlockwise is null || i.anticlockwise is undefined )
      false
    else
      i.anticlockwise
    startAngle = if (i.startAngle is null || i.startAngle is undefined )
      0
    else
      i.startAngle

    endAngle = if (i.endAngle is null || i.endAngle is undefined )
      360
    else
      i.endAngle

    context.beginPath()
    context.arc(i.x, i.y, radius, (Math.PI / 180) * startAngle, (Math.PI / 180) * endAngle, anticlockwise)
    context.fillStyle = fillColor
    context.fill()
    context.lineWidth = width
    context.strokeStyle = color
    context.stroke()
    context.strokeStyle = "#000000"
    context.lineWidth = 1
    context.fillStyle = "#000000"


class Picture extends Canvas_Geometry

Picture::draw = (obj) ->
  for i in obj
    Picture.Process(i)


Picture::Process = (obj) ->
  image = new Image()
  image.src = obj.src
  image.onload = ()->
    context.drawImage(image, obj.x, obj.y)


class Axes extends Canvas_Geometry
  #{type : "x" , orientation: "top", values : [27,54,81,108,135] , min: 5, max: 140, margin: 5, height: 240, width: 180, grid: true}
Axes::draw = (obj) ->
  for i in obj
    grid = if (i.grid is null || i.grid is undefined )
      false
    else
      i.grid
    if i.type == "x"
      orientation = if (i.orientation is null || i.orientation is undefined )
        "bottom"
      else
        i.orientation
    else
      orientation = if (i.orientation is null || i.orientation is undefined )
        "left"
      else
        i.orientation

    context.beginPath()

    if i.type == "x"
      context.strokeStyle = "#000000"
      if i.orientation == "top"
        context.moveTo(i.margin, i.margin)
        context.lineTo(i.width - i.margin, i.margin)
      else
        context.moveTo(i.margin, i.height - i.margin)
        context.lineTo(i.width - i.margin, i.height - i.margin)

      context.stroke()
      context.strokeStyle = "rgba(128, 128, 255, 0.5)"
#      j = 0
#      while j <= i.values.length
#        currentY = i.margin + j / i.values.length * (i.height - (2 * i.margin))
#        if i.grid == true
#          context.moveTo i.width - i.margin, currentY
#          context.lineTo i.margin, currentY
#        context.fillText(Math.ceil(i.min + ((i.max - i.min) / i.values.length) * (i.values.length - j)), 10, currentY + 4);
#        j++
      j = 0
      while j <= i.values.length
        currentX = i.margin + j / i.values.length * (i.width - (2 * i.margin))
        if i.grid == true
          context.moveTo currentX, i.margin
          context.lineTo currentX, (i.height - i.margin)
        if i.orientation == "top"
          context.fillText(Math.ceil(i.min + ((i.max - i.min) / i.values.length) * (j)), currentX - 3,
             i.margin / 2)
        else
          context.fillText(Math.ceil(i.min + ((i.max - i.min) / i.values.length) * (j)), currentX - 3,
            (i.height - i.margin) + i.margin / 2)

        j++

      context.stroke()
      context.strokeStyle = "#000000"
    if i.type == "y"

      if i.orientation == "right"
        context.moveTo(i.width - i.margin, i.margin)
        context.lineTo(i.width - i.margin, i.height - i.margin)
      else
        context.moveTo(i.margin, i.margin)
        context.lineTo(i.margin, i.height - i.margin)

      context.stroke()
      context.strokeStyle = "rgba(128, 128, 255, 0.5)"
#      j = 0
#      while j <= i.values.length
#        currentX = i.margin + j / i.values.length * (i.width - (2 * i.margin))
#        if i.grid == true
#          context.moveTo currentX, i.margin
#          context.lineTo currentX, (i.height - i.margin)
#        context.fillText(Math.ceil(i.min + ((i.max - i.min) / i.values.length) * (j)), currentX - 3,
#          (i.height - i.margin) + i.margin / 2)
#        j++
      j = 0
      while j <= i.values.length
        currentY = i.margin + j / i.values.length * (i.height - (2 * i.margin))
        if i.grid == true
          context.moveTo i.width - i.margin, currentY
          context.lineTo i.margin, currentY
        if i.orientation == "right"
          context.fillText(Math.ceil(i.min + ((i.max - i.min) / i.values.length) * (i.values.length - j)), 10  + i.width - i.margin , currentY + 4);
        else
          context.fillText(Math.ceil(i.min + ((i.max - i.min) / i.values.length) * (i.values.length - j)), 10, currentY + 4);
        j++



      context.stroke()
      context.strokeStyle = "#000000"


Canvas_Parse = (obj)->
  window.canvas = document.getElementById(obj.id)
  window.context = canvas.getContext("2d")
  window.Line = new Line()
  window.Point = new Point()
  window.Picture = new Picture()
  window.Axes = new Axes()
  window.Diamond = new Diamond()
  for key,value of obj
    if key == "id"
      continue
    else
      window[key]["draw"](value)



