/* eslint-disable no-shadow,no-param-reassign */
export const state = () => ({
    data: {}
});

export const mutations = {
    setResume(state, payload) {
        state.data = payload;
    }
};

export const actions = {
    useResume({ commit }, resume) {
        commit('setResume', resume);
    }
};
