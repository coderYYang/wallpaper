/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-16 16:51:39
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 16:53:40
 * @FilePath: /wallpaper/src/main/tray.ts
 * @Description:
 */
import { Menu, Tray } from 'electron'
import path from 'path'
const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/trayTemplate@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([{ label: '退出', role: 'quit' }])
  tray.setToolTip('杨杨大叔桌面壁纸软件')
  tray.setContextMenu(contextMenu)
}

export { createTray }
