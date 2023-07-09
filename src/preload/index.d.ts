import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: {
      // 设置壁纸
      setWallpaper: (url: string) => void
      download: (url: string) => void
    }
  }
}
