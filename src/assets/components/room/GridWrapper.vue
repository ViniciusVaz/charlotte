<template>
    <div class="grid-wrapper" v-if="rooms.rooms">
        <h3 class="grid-wrapper__title">Best choices between {{filters.startDate}} and {{filters.endDate}}</h3>
        <div class="grid-wrapper__content">
            <div class="grid-wrapper__content__filter">
                <div class="grid-wrapper__content__filter__mobile-menu" @click="toogleMenu()" v-if="!app.menu">
                    <img src="~_img/filter.svg" alt="filter">
                    <p>Filter</p>
                </div>
                <FilterRoom />
            </div>
            <div class="grid-wrapper__content__room">
                <template v-for="(room, i) in rooms.rooms" v-if="rooms.rooms.length > 0">
                    <room :key="i" :room="room"></room>
                </template>
                <template v-if="rooms.rooms.length == 0"> 
                    <span>Sorry, no available rooms.</span>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from "vuex"
    import Room from "./Room.vue"
    import FilterRoom from "./FilterRoom.vue"

    export default {
        computed: {
            ...mapState([
                "rooms",
                "filters",
                "app"
            ])
        },
        methods: {
            ...mapActions([
                "toogleMenu"
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
        font-family: "Montserrat";
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        max-width: 1180px; 
        position: relative;

        @media screen and (max-width: 1200px) {
            width: 992px;
        }

        @media screen and (max-width: 992px) {
            width: 100%;
        }

        &__title {
            font-size: 22px;
            margin-top: 52px;
        }

        &__content {
            display: flex;
            position: relative;
            width: 100%;

            &__filter {
                margin-top: 70px;
                max-width: 310px;

                &__mobile-menu {
                    display: none;

                    > p {
                        font-size: 20px;
                        padding-left: 8px;
                        text-transform: uppercase;
                    }

                    @media screen and (max-width: 1200px) {
                        display: flex;
                        align-items: center;
                        width: 35px;
                        height: 13px;
                        position: absolute;
                        top: 22px;
                        left: 80px;
                    }
                }
            }

            &__room {
                width: 100%;
                margin-top: 70px;
                margin-left: 130px;

                @media screen and (max-width: 1200px) { 
                    margin-left: 0;
                }

                > span {
                    font-size: 18px;
                    text-align: center;
                    font-weight: 700;
                }
            }
        }
    }
</style>