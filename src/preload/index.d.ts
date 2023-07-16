import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: {
      // 设置壁纸
      setWallpaper: (url: string, path: string) => void
      // 下载壁纸
      downloadImage: (url: string) => void
      // 设置壁纸保存目录
      setImageSaveDirectory: () => Promise<string>
      // 检测图片目录
      checkDirectory: (path: string) => Promise<boolean>
    }
  }
}
