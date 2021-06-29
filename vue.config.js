module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                appId: 'com.saki.app',
                productName: '我的应用',    // 桌面显示的应用名
                win: { // win相关配置
                    icon: './public/logo.png', // 图标，当前图标在根目录下，注意这里有两个坑
                    requestedExecutionLevel: "requireAdministrator", //获取管理员权限
                    target: [{
                        target: 'nsis', // 利用nsis制作安装程序
                        arch: [
                            'x64', // 64位
                            // 'ia32' // 32位
                        ]
                    }]
                },
                nsis: {
                    oneClick: false, // 是否一键安装
                    allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                    allowToChangeInstallationDirectory: true, // 允许修改安装目录
                    installerIcon: './public/favicon.ico', // 安装图标
                    uninstallerIcon: './public/favicon.ico', // 卸载图标
                    installerHeaderIcon: './public/favicon.ico', // 安装时头部图标
                    createDesktopShortcut: true, // 创建桌面图标
                    createStartMenuShortcut: true, // 创建开始菜单图标
                    shortcutName: '我的应用' // 安装界面显示的应用名
                }
            }
        }
    }
}