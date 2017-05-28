##本项目用了 
[Create React App](https://github.com/facebookincubator/create-react-app).
[react-router-dom](https://reacttraining.cn/web/guides/quick-start)
[ant.design](https://ant.design/index-cn)
[rc-queue-anim](https://motion.ant.design/api/queue-anim)

## 文件夹结构

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.js
    App.test.js
    main.js
    assets
      jpg
    components
      各种组件
    containers
      容器
    store
      redux的数据结构
    style
      less
```

该项目的建设，**这些文件必须准确的文件名**存在：

* `public/index.html` 页面模板;
* `src/main.js` JavaScript入口点.

当然你也可以改，在webpack配置里改，自己找去~

## 可用的脚本

在项目目录中，您可以运行：

### `npm start`

在开发模式下运行应用程序。<br>
打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看它.

如果进行编辑，页面将重新加载.<br>
您还将看到控制台中的任何错误.

### `npm test`

在交互式观看模式中启动测试模式.<br>
想看更多 [running tests](#running-tests) 的信息自己去看代码去.

### `npm run build`

将生产应用程序建立到 `build` 文件夹.<br>
它正确捆绑react在生产模式和优化建设的最佳性能.

构建压缩和文件名包括hashes.<br>
您的应用程序准备部署！

想看更多 [deployment](#deployment) 的信息，自己看代码去.
