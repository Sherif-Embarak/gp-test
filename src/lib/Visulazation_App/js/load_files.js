var coping = function(url , file){
  var fs = require('fs');
  var path = require('path');
  var dir = path.resolve(".");
  //alert(dir);
  if(fs.createReadStream(url).pipe(fs.createWriteStream(dir+'/../Test_app_electron/DataSets/'+file))){
    document.getElementById("my-input").value = "";
    var footer = '<button class="btn btn-large btn-default" onclick="Alert.ok()">Okay</button>' ;
    Alert.render("Loaded Succefully !" , footer);
  }else{
    var footer = '<button class="btn btn-large btn-default" onclick="Alert.ok()">Okay</button>' ;
    Alert.render("Failed !" , footer);
  }
}

var file_value = function(){
      var files = document.getElementById("my-input").files;
      var file_name = document.getElementById("my-input").value;
          file_name = file_name.replace("fakepath", "");
          file_name = file_name.replace("C:", "");
          file_name = file_name.replace(/\\/g , "");
      for (var i = 0; i < files.length; i++)
            file_u = files[i].path;
      coping(file_u , file_name);
}
