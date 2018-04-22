<template>
    <div class="grid-wrapper" >
        <h3>Best choices between {{filters.startDate}} and {{filters.endDate}}</h3>
        <div class="grid-wrapper__content">
            <div class="grid-wrapper__content__filter">
                <FilterRoom />
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
    import FilterRoom from "./FilterRoom.vue"

    export default {
        computed: {
            ...mapState([
                "rooms",
                "filters"
            ])
        },
        components: {
            Room,
            FilterRoom
        }
    }
</script>
<style lang="scss" scoped>
    .grid-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;    

        &__content {
            display: flex;

            &__filter {
                margin-top: 70px;
                width: 310px;
            }

            &__room {
                margin-top: 70px;
                margin-left: 100px;
            }
        }
    }
</style>