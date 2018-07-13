# 概述

这是本人用来学习React+webpack配置的代码库，也是本人首次用gitHub管理个人东西。主要供本人学习使用，他人也可自行下载学习。



# 功能

包含以下功能：

- webpack开发环境搭建,包括Babel、热更新等
- 处理CSS及图片,引入postCSS及图片处理等
- webpack性能提升,包括打包性能、提取公共包等
- webpack自动化生成多入口页面
- webpack生产环境配置,包括压缩js代码,图片转码等
- gulp自动化发布到多个环境,生成版本号,打包成zip等
- 引入eslint代码检查



# 下载代码

使用git clone <本仓库地址> 或者直接下载zip包到本地。



# 生成上线包并放到服务器中
1.  npm run ptp     在back文件夹下生成zip压缩包并上传到服务器



# 新增页面方法

1.  在config/entry/entry.js中添加类似的数组元素
2.  app/component下添加对应的jsx文件夹
3.  运行npm run devNew 生成新的html、js文件
4.  运行npm run dev运行开发环境





# 开发环境运行代码

1.  npm install     安装本项目使用的依赖包
2.  npm run entry   编译js文件
3.  npm run dev     运行本项目




# 生成生产环境代码

1.  npm run p 压缩js和css代码，生成生产包到预定的文件夹（本项目生成的是根目录下pc文件夹）
2.  在开发环境都运行过后才可以生成生产环境代码




# Information

author： xiaoxin.qiao

emile: 775177772@qq.com

date: 2018/06/14

欢迎大家批评指正！

