ipc_render = require('electron').ipcRenderer



ipc_render.send 'asyn-msg' , 'ping'
ipc_render.on 'asyn-reply', (event,arg)->
  console.log arg


$ ->
  $('#newWindow').click ->
    if $('#newWindow').hasClass("active")
      $('#newWindow').removeClass("active");
      ipc_render.send 'close_window' , 'newWindow'
    else
      $('#newWindow').addClass("active");
      ipc_render.send 'open_window' , 'newWindow'
  return



