import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/vue/main.js'
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    // Vue 插件会在引用单文件组件中的资源 URL 时
                    // 将其重写指向 Laravel Web 服务器
                    // 将此设置为 `null` 可以让 Laravel 插件
                    // 将资源 URL 重写为指向
                    // Vite 服务器
                    base: null,

                    // Vue 插件会解析绝对 URL
                    // 并将其视为磁盘上的绝对路径
                    // 将此设置为 `false` 将保留绝对 URL 不变
                    // 以便它们可以按预期引用 public 目录中的资源
                    includeAbsolute: false,
                },
            },
        }),
        AutoImport({
            include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix:'icon',
                    enabledCollections:['lsicon']
                }),
            ],
            imports: [
                'vue',
                // "vitest",
                '@vueuse/core',
                // 'pinia',
                // VueRouterAutoImports,
                // {
                // 'vue-router/auto': ['useLink'],
                // },
                // unheadVueComposablesImports,
            ],
        }),

        Components({
            resolvers: [
                IconsResolver({
                    prefix:'icon',
                    enabledCollections:['lsicon']
                }),
                ElementPlusResolver()
            ],
        }),
        Icons({
            autoInstall: true,
        }),
        ElementPlus({}),

        UnoCSS(),
    ],
    resolve: {
        alias: {
            '@': '/resources/vue',
        },
    },
});
