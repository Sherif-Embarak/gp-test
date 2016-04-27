/**
 * Created by Sherif on 3/17/2016.
 */
//var l=[{name: "sherif" , age: 2}];
//console.log(l[0].name);

var csv_data = dl.load({url: 'stocks.csv'});
var data = dl.read(csv_data, {type: 'csv', parse: 'auto'});
//console.log(data);
//for(var i=0;i<data.length;i++)
//{
//    for(var j in data[i])
//    {
//        console.log(j+' -> '+data[i][j]);
//    }
//}
var array=dl.groupby('symbol').execute(data);
console.log(array);
//console.log(data.columns);