/* eslint-disable no-shadow,no-param-reassign */
export const state = () => ({
    data: {}
});

export const mutations = {
    init(state, payload) {
        state.data = payload;
    }
};
