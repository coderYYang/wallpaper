import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: {
      // 设置壁纸
      setWallpaper: (url: string) => void
      // 下载壁纸
      downloadImage: (url: string) => void
    }
  }
}
