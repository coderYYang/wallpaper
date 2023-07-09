import { Controller, Get, Res } from '@nestjs/common'
import { readFileSync, readdirSync } from 'fs'
import { resolve } from 'path'
import { AppService } from './app.service'
import { Response } from 'express'
import _ from 'lodash'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    const files = readdirSync(resolve(__dirname, '..', 'wallpaper'))
    const file = readFileSync(resolve(__dirname, '../wallpaper', files[_.random(files.length - 1)]))
    // 设置返回类型为图片 --> 重要，不然浏览器会当成文件下载
    res.type('image/jpeg')
    return res.send(file)
    // return 'http://localhost:3000/wallpaper/' + files[_.random(files.length - 1)]
  }
}
