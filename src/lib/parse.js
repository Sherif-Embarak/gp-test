/**
 * Created by Sherif on 3/31/2016.
 */

var return_axis = [];
var import_json = function(path){
    var json_data = dl.load({url: path});
    var data = dl.read(json_data, {type: 'json', parse: 'auto'});
    return data;
};
var import_csv = function(path){
    var csv_data = dl.load({url: path});
    var data = dl.read(csv_data, {type: 'csv', parse: 'auto'});
    return data;
};
var scale=new Scales();
var pars_core = function (json_object)
{
   //console.log(json_object);
    var variable = new Variable();
    var scaled_obj=[];
    var data_table = data_parsing('../data/test.csv');
    var coord = new Coordinate();
    var color=["Red","Orange","Yellow"]
    var canvas_prop={"width":0,"height":0,"padding":{"top": 0, "left": 0, "bottom": 0, "right": 0},"margin":{"top": 0, "left": 0, "bottom": 0, "right": 0}};
    for(key in json_object) {
        if(key == "width"){canvas_prop.width=json_object[key];}
        if(key == "height"){canvas_prop.height=json_object[key];}
        if(key== "padding"){canvas_prop.padding=json_object[key];}
        if (key == "margin"){canvas_prop.margin=json_object[key];}
        if(key== "transform"){
            for(var i=0;i<json_object[key].length;i++) {
                console.log(variable.transform(json_object[key][i]));
            }
        }
        if (key == "scales") {
           var canvas_obj =scale.actual_canvas(canvas_prop);
           scaled_obj=scale.scaling(json_object[key],canvas_obj,data_table);}
        if(key=="marks")
        {
            for(i in scaled_obj)
             scale.mk_line(scaled_obj[i]),color[i];
        }

        if (key == "axes"){
            console.log(canvas_obj);
            for(var i =0;i<json_object[key].length;i++ )
            {
               return_axis.push(coord.axis(data_table,json_object[key][i] , canvas_obj));
            }
        }

    }
}
