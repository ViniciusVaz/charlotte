import "_scss/main.scss"
import 'v-calendar/lib/v-calendar.min.css';

import Vue from "vue"
import App from "./components/App.vue"
import VCalendar from 'v-calendar'

Vue.use(VCalendar)

new Vue({
    ...App
}).$mount("#app")