<template>
    <section id="about" class="section-scroll about">
        <div class="bio">
            <h1>
                {{ about.firstname }} <span>{{ about.name }}</span>
            </h1>
            <p class="bio__description">
                {{ about.label }} - {{ about.location.city }},
                {{ about.location.country }}
            </p>
            <p>{{ about.summary }}</p>
        </div>
        <div class="social">
            <div class="social__links">
                <div class="social__links--container">
                    <a
                        v-for="item in about.profiles"
                        :key="item.network"
                        class="social__links--link"
                        :href="item.url"
                        target="_blank"
                    >
                        <v-icon>{{ item.icon }}</v-icon>
                    </a>
                </div>
            </div>
        </div>
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
    background-color: $nr-grey-darken-3;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        text-transform: uppercase;
        padding-bottom: 10px;

        span {
            color: $nr-yellow;
        }
    }

    .bio {
        &__description {
            padding-bottom: 20px;
            font-size: 17px;
        }
    }

    .social {
        position: absolute;
        right: 5%;
        top: calc(100vh - 48px - 75px);

        &__links {
            /*display: flex;*/
            /*flex-direction: row;*/
            /*justify-content: center;*/

            &--container {
                /*padding-top: 20px;*/
                display: flex;
                flex-direction: row;
                /*justify-content: space-between;*/
                /*width: 30%;*/
            }

            &--link {
                /*display: flex;*/
                /*flex-direction: column;*/

                padding: 0 5px;

                i {
                    font-size: 36px;
                }

                :hover {
                    color: $nr-yellow;
                }
            }
        }
    }
}
</style>
