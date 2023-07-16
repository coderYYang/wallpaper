/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-04 18:16:12
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 16:14:55
 * @FilePath: /wallpaper/src/main/ipcMain/setWallpaper.ts
 * @Description: 进程通信
 */
import { IpcMainEvent, IpcMainInvokeEvent, ipcMain } from 'electron'
import fs from 'fs'
import { resolve } from 'path'
import wallpaper from 'wallpaper'
import { downloadFile } from '../util'

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
