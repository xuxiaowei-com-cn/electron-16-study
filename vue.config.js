module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // 是否启用 asar 打包，默认值：true
        asar: true,
        // 需要解压后读取的文件
        // 所有文件：**/*
        asarUnpack: ['**/*'],
        nsis: {
          // 是否为所有用户安装
          // 默认：false
          // false：C:\Users\用户名\AppData\Local\Programs\electron-16-study
          // true：C:\Program Files\electron-16-study
          perMachine: true,
          // 是否允许用户更改安装目录
          // 默认：false
          // true：需要将 oneClick 设置为 false
          allowToChangeInstallationDirectory: true,
          // 是否创建一键安装程序或辅助
          oneClick: false,
          // 默认：build/installerIcon.ico
          installerIcon: 'build/installerIcon.ico',
          // 默认：build/uninstallerIcon.ico
          uninstallerIcon: 'build/uninstallerIcon.ico',
        }
      }
    }
  }
}
