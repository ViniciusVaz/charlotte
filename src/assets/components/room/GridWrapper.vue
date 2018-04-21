<template>
    <div class="grid-wrapper" v-if="rooms.rooms.length > 0">
        <h3>Best choices between {{filters.startDate}} and {{filters.endDate}}</h3>
        <div class="grid-wrapper__content">
            <div class="grid-wrapper__content__filter">
                <Filter />
            </div>
            <div class="grid-wrapper__content__room">
                <template v-for="(room, i) in rooms.rooms">
                    <room :key="i" :room="room"></room>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex"
    import Room from "./Room.vue"

    export default {
        computed: {
            ...mapState([
                "rooms",
                "filters"
            ])
        },
        components: {
            Room
        }
    }
</script>
<style lang="scss" scoped>
    .grid-wrapper {
        text-align: center;
        margin-top: 40px;

        &__content {
            display: flex;

            &__filter {
                width: 20%;
                height: 700px;
            }

            &__room {
                margin-top: 70px;
            }
        }
    }
</style>