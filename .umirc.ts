import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  locale: { antd: true },
  routes: [
  { path: '/', component: '@/pages/index' },
  { path: '/products', component: '@/pages/products' },
],
});