import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { TDesignResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: "vue-next",
        }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: "vue-next",
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    // 是否开启https
    https: false,
    // 端口号
    port: 3000,
    // 监听所有地址
    host: "0.0.0.0",
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {},
  },
  build: {
    // 设置浏览器兼容目标
    target: "es2015",
    // 构建后是否生成source map文件
    sourcemap: false,
    // chunk大小警告的限制(以kbs为单位)
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: false,
  },
  css: {
    // CSS 预处理器相关配置, 实现 less 全局样式
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true;@import (reference) "${resolve(
            "src/style/variables.less"
          )}";`,
        },
        math: "strict",
        javascriptEnabled: true,
      },
    },
  },
});
