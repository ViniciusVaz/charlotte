import { SET_FILTER } from "../mutation-types"

export default {
    state: {
        stars: "",
        priceRange: [],
        startDate: "",
        endDate: ""
    },
    mutations: {
        [SET_FILTER] (state, data) {
            const dataLabel = data.label
            Object.keys(state).map((key, index) => { if(key === data.label) state[key] = data.value })
        }
    },
    actions: {
        setFilter ({ commit }, data) {
            commit("SET_FILTER", data)
        }
    }
}