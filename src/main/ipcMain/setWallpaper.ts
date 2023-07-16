/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-04 18:16:12
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 15:09:14
 * @FilePath: /wallpaper/src/main/ipcMain/setWallpaper.ts
 * @Description: 进程通信
 */
import { IpcMainEvent, IpcMainInvokeEvent, dialog, ipcMain } from 'electron'
import wallpaper from 'wallpaper'
import { downloadFile } from '../util'
import { resolve } from 'path'
import fs from 'fs'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  try {
    const localFile = resolve(path, url.split('/').pop()!)
    const file = await downloadFile(url, localFile)
    wallpaper.set(file, { screen: 'all', scale: 'auto' })
  } catch (error) {
    // dialog.showErrorBox('提示', '图片下载失败，请在设置中心定义目录')
  }
})

ipcMain.handle('checkDirectory', async (_event: IpcMainInvokeEvent, path: string) => {
  return await fs.existsSync(path)
})
