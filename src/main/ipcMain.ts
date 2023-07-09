/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-04 18:16:12
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-04 18:18:55
 * @FilePath: /wallpaper/src/main/ipcMain.ts
 * @Description: 进程通信
 */
import { ipcMain } from 'electron'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import fetch from 'node-fetch'

ipcMain.on('setWallpaper', async (_event, url) => {
  const streamPipeline = promisify(pipeline)

  const response = await fetch(
    'https://github.githubassets.com/images/modules/logos_page/Octocat.png'
  )

  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)

  await streamPipeline(response.body, createWriteStream('./octocat.png'))
})
