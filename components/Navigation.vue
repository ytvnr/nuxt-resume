<template>
    <scrollactive ref="scrollactive" class="my-nav" :offset="48">
        <template v-for="section in sections">
            <a :key="section.id" :href="section.id" class="scrollactive-item">
                {{ $t(`navigation.${section.name}`) }}
            </a>
        </template>
    </scrollactive>
</template>

<script>
export default {
    data() {
        return {
            sections: [
                {
                    id: '#about',
                    name: 'about'
                },
                {
                    id: '#experience',
                    name: 'experience'
                },
                {
                    id: '#education',
                    name: 'education'
                },
                {
                    id: '#skills',
                    name: 'skills'
                },
                {
                    id: '#interests',
                    name: 'interests'
                }
            ]
        };
    },
    computed: {

    }
};
</script>

<style scoped lang="scss">
.scrollactive-item {
    padding: 0 3px;
}

@media screen and (max-width: $break-small) {
    [class='scrollactive-item'] {
        display: none;
    }
}
</style>
