/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-12 13:48:20
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 16:15:04
 * @FilePath: /wallpaper/src/main/util.ts
 * @Description: 下载文件方法
 */

import { dialog } from 'electron'
import fetch from 'node-fetch'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'

export const downloadFile = async (url: string, localFile: string) => {
  const streamPipeline = promisify(pipeline)
  const response = await fetch(url)
  if (!response.ok) {
    dialog.showErrorBox('提示', `下载壁纸失败: ${response.statusText}`)
    throw new Error(`unexpected response ${response.statusText}`)
  }
  await streamPipeline(response.body, createWriteStream(localFile))

  return localFile
}
