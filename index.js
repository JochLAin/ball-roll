#!/bin/node

const Electron = require('electron');
const path = require('path');
let window;

function createWindow () {
    window = new Electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.loadFile(path.join(__dirname, 'public/index.html'));
    window.on('closed', () => {
        window = null
    });
}

Electron.app.on('ready', createWindow);
Electron.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') Electron.app.quit()
});

Electron.app.on('activate', () => {
    if (window === null) createWindow()
});
