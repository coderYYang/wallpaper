/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-09 18:42:20
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-09 18:49:58
 * @FilePath: /wallpaper/src/renderer/src/hooks/useWallpaper.ts
 * @Description: 壁纸操作
 */
import { useConfig } from '@renderer/store/useConfig'

export default () => {
  const { config } = useConfig()
  /**
   * @description: 设置壁纸
   * @return {*}
   */
  const setWallpaper = (): void => {
    window.api.setWallpaper(config.url)
  }

  return { setWallpaper }
}
