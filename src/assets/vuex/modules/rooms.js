import { SET_ROOMS } from "../mutation-types"
import service from "_service/rooms"

export default {
    state: {
        rooms: null
    },
    mutations: {
        [SET_ROOMS] (state, data) {
            state.rooms = data
        }
    },
    actions: {
        getRooms ({ commit }, data) {
            service.getRooms(data).then((response) => {
                if(!response.data.error)
                    commit("SET_ROOMS", response.data.data)
            })
        }
    }
}