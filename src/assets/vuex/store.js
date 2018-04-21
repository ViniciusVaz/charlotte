import Vue from "vue"
import Vuex from "vuex"

import rooms from "./modules/rooms"
import filters from "./modules/filters"

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        rooms,
        filters
    }
})