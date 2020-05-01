<template>
    <div>
        <v-toolbar-title v-if="!isMobile" class="logo">
            <span class="logo-curly">{&nbsp;</span>
            <span class="logo-content"><strong>yann: </strong>tavernier</span>
            <span class="logo-curly">&nbsp;}</span>
        </v-toolbar-title>
        <v-toolbar-title v-if="isMobile" class="logo">
            <span class="logo-curly">{&nbsp;</span>
            <span class="logo-content"><strong>y: </strong>t</span>
            <span class="logo-curly">&nbsp;}</span>
        </v-toolbar-title>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            isMobile: (state) => state.viewport.isMobile
        })
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
