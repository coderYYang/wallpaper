import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'
import { readFile, readdir } from 'fs/promises'
import _ from 'lodash'
import { resolve } from 'path'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getRandomImage() {
    const files = await readdir(resolve(__dirname, '..', 'wallpaper'))
    // const file = await readFile(resolve(__dirname, '../wallpaper', files[_.random(files.length - 1)]))
    // // 设置返回类型为图片 --> 重要，不然浏览器会当成文件下载
    // return new Promise((resolves) => {
    //   setTimeout(() => {
    //     res.type('image/jpeg')
    //     resolves(res.send(file))
    //   }, 2000)
    // })
    return 'http://localhost:3000/wallpaper/' + files[_.random(files.length - 1)]
  }
}
