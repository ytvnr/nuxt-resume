/* eslint-disable no-shadow,no-param-reassign */
export const state = () => ({
    isMobile: false
});

export const mutations = {
    setMobile(state, payload) {
        state.isMobile = payload;
    }
};

export const actions = {
    setMobile({ commit }, isMobile) {
        commit('setMobile', isMobile);
    }
};
