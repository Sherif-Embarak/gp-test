/**
 * Created by Sherif on 4/10/2016.
 */

var data_parsing=function (path) {
    var data={"name":"","data_table":[],"headers":[]};
    data = import_csv(path);
    var counter = -1;
    var row=[];
    var values = [];
    var headers = [];
    for (var i = 0; i < data.length; i++) {
        var arr_temp=[];
        var temp ={"name":"","values":[],"headers":[]} ;
        for (item in data[i]) {
            if (counter >= 0) {
                arr_temp.push(data[i][item]);
            } else {
                temp.name=(data[i][item]);
            }
            counter = 0;
        }
        temp.headers = data.columns;
        temp.values = arr_temp;
        row.push(temp);
        counter = -1;
    }

   return row;
}

