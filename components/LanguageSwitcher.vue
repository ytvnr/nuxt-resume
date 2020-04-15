<template>
    <div class="language">
        <nuxt-link
            class="language-icon"
            :class="{
                active: $i18n.locale === 'fr',
                disabled: $i18n.locale !== 'fr'
            }"
            :to="switchLocalePath('fr')"
        >
            <img alt="Vuetify Logo" src="~/static/fr.svg" />
        </nuxt-link>

        <nuxt-link
            class="language-icon"
            :class="{
                active: $i18n.locale === 'en',
                disabled: $i18n.locale !== 'en'
            }"
            :to="switchLocalePath('en')"
        >
            <img alt="Vuetify Logo" src="~/static/en_us.svg" />
        </nuxt-link>
    </div>
</template>

<style scoped lang="scss">
.language {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70px;

    &-icon {
        height: 22.5px;
        width: 28px;

        &.disabled {
            opacity: 0.5;
            &:hover {
                opacity: 1;
            }
        }

        &.active {
            pointer-events: none;
        }
    }
}
</style>
