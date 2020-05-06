## 技术路线

- 框架：[vue](https://cn.vuejs.org/)
- 路由：[vue-router](https://router.vuejs.org/zh/)
- 状态管理：[vuex](https://vuex.vuejs.org/zh/)
- 代码风格：[eslint](https://eslint.org/)、[prettier](https://prettier.io/)
- 样式：[less](http://lesscss.org/)
- 图标：[iconfont](https://www.iconfont.cn/)
- 组件库：[ElementUI](https://element.eleme.cn/#/zh-CN)、[Ant Design](https://www.antdv.com/docs/vue/introduce-cn/)
- http 请求：[node-fetch](https://github.com/bitinn/node-fetch)

#### 安装

```
npm install
```

#### 开发

```
npm run dev
```

#### 构建

```
npm run build
```

## 目录结构

```
├── dist/                        // 默认的 build 输出目录
├── public/                      // 需要打包的公共资源
└── src/                         // 源码目录
    ├── api/                     // 服务接口访问
    |   ├── request.js           // 请求工具
    |   └── url.js               // 请求地址
    ├── assets/                  // 静态资源
    |   └── public.less          // 公共样式
    ├── components/              // 组件
    |   ├── antd/                // ant design 配置
    |   └── element/             // element 配置
    ├── layouts/                 // 布局
    ├── store/                   // 状态管理
    ├── utils/                   // 工具类
    |   └── auth.js              // 鉴权工具
    ├── views/                   // 页面视图
    ├── App.vue                  // 根组件
    ├── main.js                  // 页面入口
    └── router.js                // 页面路由
```

## 备忘录

#### 组件

- 使用 babel-plugin-import 解决 element 和 ant design 按需加载问题，注意 babel.config.js 中必须先配置 element 再配置 ant design
- element 和 ant design 使用 Vue.use 方式置入，无需再单独引入
- 自定义组件使用 Cp 前缀，也使用 Vue.use 方式置入
- 在 main.js 中早于 new Vue 给 Vue 添加常用的实例方法，例如：moment、lodash 等，注意检查是否与 Vue.use 中所添加的实例方法名冲突

#### 路由

- 页面路径 path 一定要统一管理，不能使用硬编码，统一以 / 结尾
- 路由 ? 号后面的 search 部分不允许放置与过滤无关的内容
- 过滤以外的和路由相关的参数统一放在路径参数中，如 /:id/

#### 状态管理

- store：只存放公共数据，例如：通用配置信息、用户信息、permission、enum 等
- action：负责所有数据请求、接口调用等异步业务
- mutations：更新 store

#### 代码风格

- eslint + prettier
- package.json 中默认配置 semi: false, singleQuote:true
- 配置好 file watcher 后可以自动格式化代码
- 相对路径 @ 在 vue.config.js 中可配置 alias 来指定根路径
- webstorm 中通过配置项目属性中 webpack 指向 /node_modules/@vue/cli-service/webpack.config.js 可以识别 @ 路径

#### 命名

- 文件夹：驼峰命名法（注意单复数）
- 文件：驼峰命名法
- 组件：帕斯卡命名法
- 变量：驼峰命名法
- 常量：匈牙利命名法（全大写）
- 页面路由：匈牙利命名法（下划线改为连字符、全小写）

#### 样式

- 使用 vue-cli-plugin-style-resources-loader 解决全局引用 public 样式的问题
- 图标尽量使用 iconfont 替换，不再加载零碎的 icon png
