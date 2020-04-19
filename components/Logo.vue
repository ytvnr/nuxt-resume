<template>
    <v-toolbar-title class="logo">
        <span class="logo-curly">{&nbsp;</span>
        <span class="logo-content"><strong>yann: </strong>tavernier</span>
        <span class="logo-curly">&nbsp;}</span>
    </v-toolbar-title>
</template>

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
