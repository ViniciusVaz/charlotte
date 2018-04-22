import { TOOGLE_MENU } from "../mutation-types"

export default {
    state: {
        menu: false
    },
    mutations: {
        [TOOGLE_MENU] (state) {
            state.menu = !state.menu
        }
    },
    actions: {
        toogleMenu ({ commit }) {
            commit("TOOGLE_MENU")
        }
    }
}