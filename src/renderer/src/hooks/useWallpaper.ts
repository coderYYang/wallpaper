/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-09 18:42:20
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 15:11:02
 * @FilePath: /wallpaper/src/renderer/src/hooks/useWallpaper.ts
 * @Description: 壁纸操作
 */
import router from '@renderer/router'
import { useConfig } from '@renderer/store/useConfig'
import { ElMessage } from 'element-plus'

export default () => {
  const { config } = useConfig()
  /**
   * @description: 设置壁纸
   * @return {*}
   */
  const setWallpaper = async (): Promise<void> => {
    const status = await window.api.checkDirectory(config.saveDirectory)
    if (status) return window.api.setWallpaper(config.url, config.saveDirectory)
    ElMessage.error('图片保存目录无效')
    router.push('/setting')
  }

  /**
   * @description: 下载壁纸
   * @return {*}
   */
  const downloadImage = (): void => {
    window.api.downloadImage(config.url)
  }

  /**
   * @description: 设置壁纸保存目录
   * @return {*}
   */
  const setImageSaveDirectory = async (): Promise<void> => {
    const path = await window.api.setImageSaveDirectory()
    if (path) config.saveDirectory = path
  }

  return { setWallpaper, downloadImage, setImageSaveDirectory }
}
