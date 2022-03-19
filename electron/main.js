const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
  // create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app
  // win.loadfile("index.html")
  win.loadURL(
    isDev
      ? 'http:localhost:3000'
      : `file://${path.join(__dirname, '../public/index.html')}`,
  );

  // open the devtools
  if (isDev) win.webContents.openDevTools({ mode: 'right' });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('ready', createWindow);
