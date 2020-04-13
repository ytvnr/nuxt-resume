<template>
    <v-navigation-drawer
        :clipped="true"
        :floating="false"
        :mini-variant="isDrawerMini"
        :permanent="true"
        app
        overflow
    >
        <v-list dense nav>
            <template v-for="item in items">
                <v-list-item :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        isDrawerMini: Boolean
    },
    data() {
        return {
            items: [
                {
                    title: 'Bio',
                    icon: 'mdi-view-dashboard',
                    href: '/'
                },
                {
                    title: 'Experience',
                    icon: 'mdi-gif',
                    href: '/gifs'
                },
                {
                    title: 'Formation',
                    icon: 'mdi-calendar',
                    href: '/schedule'
                },
                {
                    title: 'Hobbies',
                    icon: 'mdi-account-group',
                    href: '/teams'
                },
                {
                    title: 'Faq',
                    icon: 'mdi-help-box',
                    href: '/faq'
                }
            ]
        };
    }
};
</script>

<style></style>
