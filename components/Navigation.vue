<template>
    <scrollactive ref="scrollactive" class="my-nav" :offset="48">
        <template v-for="section in sections">
            <a :key="section.id" :href="section.id" class="scrollactive-item">
                {{ $t(`navigation.${section.name}`) }}
            </a>
            &nbsp;&nbsp;
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
    }
};
</script>

<style></style>
