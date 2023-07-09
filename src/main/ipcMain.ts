/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-04 18:16:12
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-09 19:59:13
 * @FilePath: /wallpaper/src/main/ipcMain.ts
 * @Description: 进程通信
 */
import { IpcMainEvent, dialog, ipcMain } from 'electron'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import fetch from 'node-fetch'
import { resolve } from 'path'
import wallpaper from 'wallpaper'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url) => {
  const localFile = resolve(__dirname, '../../wallpaper', url.split('/').pop())
  const streamPipeline = promisify(pipeline)
  const response = await fetch(url)
  if (!response.ok) {
    dialog.showErrorBox('提示', `下载壁纸失败: ${response.statusText}`)
    throw new Error(`unexpected response ${response.statusText}`)
  }
  await streamPipeline(response.body, createWriteStream(localFile))
  wallpaper.set(localFile, { screen: 'all', scale: 'auto' })
})
