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

            <v-toolbar-title class="logo">
                <span class="logo-curly">{&nbsp;</span>
                <span class="logo-content"><strong>yann: </strong>tavernier</span>
                <span class="logo-curly">&nbsp;}</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <nr-language-switcher />
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
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

export default {
    components: {
        'nr-drawer': Drawer,
        'nr-language-switcher': LanguageSwitcher
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

<style lang="scss">
.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;

    &-curly {
        color: $nr-yellow;
        font-weight: bold;
        font-size: larger;
    }

    &-content {
        color: white;
    }
}
</style>
