/**
 * Created by Sherif on 4/10/2016.
 */

var data_parsing=function (path) {
    var data_result={"columns_name":[],"rows_name":[],"columns":[]};
    data = import_csv(path);

    var columns=new Array(5);
    var columns_name=[];
    var rows_name = [];
    var length=0
    for(item in data[0]){length++;}

    var temp = new Array();
    for (i=0;i<length-1;i++) {
        temp[i]=new Array();
        for (j=0;j<data.length-2;j++) {
            temp[i][j]=0;
        }
    }
    console.log (temp);
    var a=[];
    for (var i = 0; i < data.length-2; i++) {
        var counter = -1;
        var c=0;
        for(item in data[i]) {

            if (counter < 0) {
                rows_name.push(data[i][item]);
                counter++;
            }
            else {
                //if (!temp[c][i]) temp[c][i] = '';
                temp[c][i]=data[i][item];
                c++;
            }
        }
    }
    data_result.columns_name=data.columns;
    data_result.rows_name=rows_name;
    data_result.columns=temp;
    return data_result;
}

