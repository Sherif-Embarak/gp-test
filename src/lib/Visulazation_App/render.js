var ipc_render;

ipc_render = require('electron').ipcRenderer;

ipc_render.send('asyn-msg', 'ping');

ipc_render.on('asyn-reply', function(event, arg) {
  return console.log(arg);
});

$(function() {
  $('#newWindow').click(function() {
    if ($('#newWindow').hasClass("active")) {
      $('#newWindow').removeClass("active");
      return ipc_render.send('close_window', 'newWindow');
    } else {
      $('#newWindow').addClass("active");
      return ipc_render.send('open_window', 'newWindow');
    }
  });
});

//# sourceMappingURL=render.js.map
