/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-16 14:34:55
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 14:46:16
 * @FilePath: /wallpaper/src/main/ipcMain/setImageSaveDirectory.ts
 * @Description: 设置壁纸保存目录
 */
import { IpcMainInvokeEvent, dialog, ipcMain } from 'electron'

ipcMain.handle('setImageSaveDirectory', async (_event: IpcMainInvokeEvent) => {
  const res = await dialog.showOpenDialog({
    title: '选择壁纸保存目录',
    properties: ['createDirectory', 'openDirectory']
  })
  if (!res.canceled && res.filePaths.length) return res.filePaths[0]
  return null
})
