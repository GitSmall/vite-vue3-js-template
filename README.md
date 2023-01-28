# Vue 3 + Vite

# 安装依赖
npm install

# 启动项目
npm run dev

# 技术栈与辅助
- 基础：JavaScript + Vite3 + Vue3 + Vue Router + Pinia + Axios + Less
- 代码约束：EditorConfig + ESLint + Prettier + Stylelint + husky + lint-staged

# 其他
## 规范目录
├── dist/
└── src/
    ├── api/                       // 接口请求目录
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
        ├── modules/               // 路由模块
        ├── index.js               // 路由配置文件
    ├── store/                     // 状态管理目录
        ├── modules/               // 仓库模块
        ├── index.js               // 仓库配置文件
    ├── style/                     // 通用样式目录
    ├── utils/                     // 工具函数目录
        ├── request.js             // 请求库二次封装
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.js
├── tests/                         // 单元测试目录
├── index.html
├── jsconfig.json                  // JavaScript 配置文件
├── vite.config.js                 // Vite 配置文件
└── package.json
