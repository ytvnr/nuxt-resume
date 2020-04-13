<template>
    <v-app dark>
        <nr-drawer :isDrawerMini="isDrawerMini"></nr-drawer>

        <v-app-bar :clipped-left="true" app dense>
            <v-btn icon @click.stop="isDrawerMini = !isDrawerMini">
                <v-icon
                    >mdi-{{
                        `chevron-${isDrawerMini ? 'right' : 'left'}`
                    }}</v-icon
                >
            </v-btn>

            <v-toolbar-title><strong>YANN</strong>TAVERNIER</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>

        <v-footer :fixed="fixed" app>
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
import Drawer from '@/components/Drawer.vue';

export default {
    components: {
        'nr-drawer': Drawer
    },
    data() {
        return {
            isDrawerMini: true,
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Inspire',
                    to: '/inspire'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        };
    }
};
</script>
