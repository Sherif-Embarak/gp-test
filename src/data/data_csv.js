/**
 * Created by Sherif on 3/17/2016.
 */
//var l=[{name: "sherif" , age: 2}];
//console.log(l[0].name);
width=500;
height=700;
var yValue = function(d) { return d["Protein (g)"];}, // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");
console.log(yValue([10,20,30]));