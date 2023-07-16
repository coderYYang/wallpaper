import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  // 设置壁纸
  setWallpaper: (url: string, path: string): void => {
    ipcRenderer.send('setWallpaper', url, path)
  },
  // 下载壁纸
  downloadImage: (url: string): void => {
    ipcRenderer.send('downloadImage', url)
  },
  // 设置壁纸保存目录
  setImageSaveDirectory: (): Promise<string> => {
    return ipcRenderer.invoke('setImageSaveDirectory')
  },
  // 检测图片目录
  checkDirectory: async (path: string): Promise<void> => {
    return ipcRenderer.invoke('checkDirectory', path)
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
