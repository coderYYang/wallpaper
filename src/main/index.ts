/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-02 16:08:56
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 16:57:48
 * @FilePath: /wallpaper/src/main/index.ts
 * @Description:
 */
import { app, shell, BrowserWindow } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

import './ipcMain'
import { createTray } from './tray'
function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 365,
    alwaysOnTop: true,
    frame: false,
    // 禁止缩放
    resizable: false,
    skipTaskbar: true,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  createTray()
  // 隐藏苹果dock图标
  if (process.platform == 'darwin') app.dock.hide()
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
