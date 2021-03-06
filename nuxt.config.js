import colors from 'vuetify/es5/util/colors';

const base = process.env.NODE_ENV === 'gh-pages' ? '/nuxt-resume/' : '/';

export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
      '@/assets/variables.scss',
      '@/assets/main.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/scroll-active.js', '~plugins/i18n-resume-data.js'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
    /*
     ** Nuxt.js modules
     */
    modules: ['nuxt-i18n'],
    router: {
        base
    },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss', '~/assets/main.scss'],
        treeShake: true,
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        publicPath: '/static/',
        // extend(config, ctx) {
            // Exécuter ESLint lors de la sauvegarde
            // if (ctx.isDev && ctx.isClient) {
            //     config.module.rules.push({
            //         enforce: 'pre',
            //         test: /\.(js|vue)$/,
            //         loader: 'eslint-loader',
            //         exclude: /(node_modules)/
            //     });
            // }
        // }
    },

    i18n: {
        baseUrl: process.env.NODE_ENV === 'gh-pages' ? 'https://ytvnr.github.io/nuxt-resume/' : 'http://localhost:3000',
        locales: [
            {
                name: 'Français',
                code: 'fr',
                iso: 'fr-FR',
                file: 'fr.js'
            },
            {
                name: 'English',
                code: 'en',
                iso: 'en-US',
                file: 'en.js'
            }
        ],
        lazy: true,
        langDir: 'lang/',
        // strategy: 'prefix',
        // rootRedirect: {
        //     path: 'fr'
        // },
        defaultLocale: 'fr'
    }
};
