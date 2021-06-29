import { BrowserWindow } from 'electron'

class ElectronTool {
    get isWindows() {
        return process.platform === 'win32'
    }

    get isMacOS() {
        return process.platform === 'darwin'
    }

    get newWindow() {
        if (this.isWindows) {
            return new BrowserWindow({
                width: 1280,
                height: 800,
                // 取消默认边框
                frame: false,
                // 设置背景色
                backgroundColor: '#222223',

                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    // 开启远程模块
                    enableRemoteModule: true,
                    webSecurity: false
                }
            })
        } else if (this.isMacOS) {
            return new BrowserWindow({
                width: 1280,
                height: 960,
                // 保留mac控制按键
                titleBarStyle: 'hidden',
                // 开启mac毛玻璃效果
                vibrancy: 'popover',
                // 设置可透明
                transparent: true,
                // 背景为透明色
                backgroundColor: '#00000000',

                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    // 开启远程模块
                    enableRemoteModule: true,
                    webSecurity: false
                }
            })
        } else {
            return new BrowserWindow({
                width: 1280,
                height: 960,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    enableRemoteModule: true,
                    webSecurity: false
                }
            })
        }
    }
}

export default new ElectronTool()