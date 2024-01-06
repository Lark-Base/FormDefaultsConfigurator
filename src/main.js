/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-09-25 20:55
 * @LastAuthor : itchaox
 * @LastTime   : 2024-01-06 10:59
 * @desc       :
 */
import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/dist/index.css';
import './assets/main.css';
// import {i18n} from './locales/i18n.js'
// createApp(App).use(i18n).mount('#app') // 注入国际化函数$t

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus, {
  locale: zhCn,
});

app.mount('#app');