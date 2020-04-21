<template>
    <section id="about" class="section-scroll about">
        La bio
        {{ about }}
    </section>
</template>

<script>
export default {
    computed: {
        about() {
            return this.$store.state.resume.data.basics;
        }
    }
};
</script>

<style scoped lang="scss">
.about {
    background-color: green;
}
</style>
