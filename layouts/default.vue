<template>
    <v-app dark>
        <v-app-bar :clipped-left="true" app dense>

            <nr-logo />

            <v-spacer></v-spacer>

            <nr-navigation class="nav" />

            <v-spacer></v-spacer>

            <nr-language-switcher />
        </v-app-bar>

        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

export default {
    components: {
        'nr-logo': Logo,
        'nr-navigation': Navigation,
        'nr-language-switcher': LanguageSwitcher
    },
    data() {
        return {
            title: 'Vuetify.js'
        };
    }
};
</script>

<style lang="scss">
.red {
    background-color: red;
}

.red {
    background-color: yellow;
}
</style>
