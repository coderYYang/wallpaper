/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-04 18:16:12
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-12 13:50:07
 * @FilePath: /wallpaper/src/main/ipcMain/setWallpaper.ts
 * @Description: 进程通信
 */
import { IpcMainEvent, ipcMain } from 'electron'
import wallpaper from 'wallpaper'
import { downloadFile } from '../util'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url) => {
  const file = await downloadFile(url)
  wallpaper.set(file, { screen: 'all', scale: 'auto' })
})
