/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-04 18:16:12
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-09 19:51:41
 * @FilePath: /wallpaper/src/main/ipcMain.ts
 * @Description: 进程通信
 */
import { IpcMainEvent, ipcMain } from 'electron'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import fetch from 'node-fetch'
import { resolve } from 'path'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url) => {
  const loadFile = resolve(__dirname, '../../wallpaper', url.split('/').pop())
  const streamPipeline = promisify(pipeline)
  const response = await fetch(url)
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
  await streamPipeline(response.body, createWriteStream(loadFile))
})
