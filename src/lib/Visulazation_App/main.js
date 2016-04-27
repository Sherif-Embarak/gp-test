var app, browser_window, electron, ipc_main, main_window, tool_box;

electron = require('electron');

app = electron.app;

browser_window = electron.BrowserWindow;

ipc_main = require('electron').ipcMain;

main_window = null;

tool_box = null;

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    return app.quit();
  }
});

app.on('ready', function() {
  main_window = new browser_window({
    width: 800,
    height: 600,
    'node-integration': false
  });
  main_window.loadURL('file:///' + __dirname + '/index.html');
  return main_window.on('closed', function() {
    return main_window = null;
  });
});

ipc_main.on('asyn-msg', function(event, arg) {
  console.log(arg);
  return event.sender.send('asyn-reply', 'pong');
});

ipc_main.on('open_window', function(event, arg) {
  tool_box = new browser_window({
    width: 200,
    height: 500,
    frame: false
  });
  return tool_box.loadURL('file:///' + __dirname + '/tool_box.html');
});

ipc_main.on('close_window', function(event, arg) {
  tool_box.close();
  return tool_box.on('closed', function() {
    return tool_box = null;
  });
});

//# sourceMappingURL=main.js.map
