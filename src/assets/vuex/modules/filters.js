import { SET_FILTER } from "../mutation-types"

export default {
    state: {
        stars: "",
        priceRange: [],
        startDate: "",
        endDate: "",
        totalNights: 1
    },
    getters: {
        totalNights: state => {
            return state.totalNights
        }
    },
    mutations: {
        [SET_FILTER] (state, data) {
            Object.keys(state).map((key, index) => { if(key === data.label) state[key] = data.value })
        }
    },
    actions: {
        setFilter ({ commit }, data) {
            commit("SET_FILTER", data)
        }
    }
}