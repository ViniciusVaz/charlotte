import "_scss/main.scss"
import "v-calendar/lib/v-calendar.min.css"

import store from "_vuex/store"
import Vue from "vue"
import App from "_components/App.vue"
import VCalendar from 'v-calendar'

Vue.use(VCalendar)

new Vue({
    store,
    ...App
}).$mount("#app")