/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-12 13:46:33
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-12 14:57:43
 * @FilePath: /wallpaper/src/main/ipcMain/downloadImage.ts
 * @Description: 下载图片
 */

import { IpcMainEvent, dialog, ipcMain } from 'electron'
import { downloadFile } from '../util'

ipcMain.on('downloadImage', async (_event: IpcMainEvent, url: string) => {
  const fileName = url.split('/').pop()!
  const res = await dialog.showSaveDialog({
    title: '保存图片',
    message: '杨杨桌面壁纸软件',
    defaultPath: fileName,
    properties: ['createDirectory']
  })

  if (!res.canceled && res.filePath) downloadFile(url, res.filePath)
})
