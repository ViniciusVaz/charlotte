<template>
    <div class="room">
        <div class="room__image">
            <img :src="room.image" alt="image room">
        </div>
        <div class="room__info" v-if="showInfo">
            <div class="room__info__details" >
                <div class="room__info__details__rate">
                    <template v-for="(item, i) in room.rate">
                        <img :key="i" src="~_img/star-filled.svg"/>
                    </template>
                </div>
                <h3 class="room__info__details__name">{{ room.name }}</h3>
                <p class="room__info__details__description">{{ room.description }}</p>
                <div class="room__info__details__button button">
                    <div class="button__item button__item--book-now">Book now</div>
                    <div class="button__item button__item--price-history" @click="showInfo = false">Price history</div>
                </div>
            </div>
            <div class="room__info__value">
                <p class="room__info__value__nights">Total <span>8 nights</span></p>
                <span class="room__info__value__price-total">${{ room.price }}</span>
                <span class="room__info__value__per-night">Per night</span>
                <span class="room__info__value__price-night">${{ room.price }}</span>
            </div>
        </div>
        <div class="room__chart" v-if="!showInfo">
            <div class="room__chart__info">
                <p class="room__chart__info__title">Price history for 2017</p>
                <a class="room__chart__info__back" @click="showInfo = true">
                    <img src="~_img/back-description.svg" alt="Back to informations">
                    <p>Back to description</p>
                </a>
            </div>
            <div class="room__chart__graphic">
                <RoomChart :dataCollection="dataCollection"/>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex"
    import RoomChart from "_components/room/RoomChart.vue"

    export default {
        data() {
            return {
                showInfo: true,
            }
        },
        props: {
            room: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            ...mapState ([
                "app"
            ]),
            dataCollection() {
                const chart = {
                    labels: [],
                    datasets: [{
                        backgroundColor: [],
                        data: []
                    }]
                }

                this.room.price_history.map((item, i) => {
                    chart.labels.push(item.month)
                    chart.datasets[0].data.push(item.value)
                    chart.datasets[0].backgroundColor.push("rgba(238,111,72,100)")
                })

                return chart
            }
        },
        components: {
            RoomChart
        }
    }
</script>
<style lang="scss" scoped>
    .room {
        position: relative;
        display: flex;
        box-shadow: 0px 0 46px -10px rgba(0, 0, 0, 0.75);
        width: 900px;
        border-radius: 10px;
        padding: 35px 35px 35px 0;
        margin-bottom: 40px;
        min-height: 308px;

        &__image {
            position: absolute;
            left: -60px;
            width: 238px;
            height: 238px;

            > img {
                border-radius: 5px;
            }
        }

        &__info {
            display: flex;
            max-height: 238px;
            margin-left: 208px;

            &__details {
                font-family: "Heebo";
                text-align: left;
                padding-right: 25px;

                &__rate {
                    display: flex;

                    > img {
                        width: 20px;
                        height: 20px;
                    }
                }

                &__name {
                    text-transform: uppercase;
                    font-size: 16px;
                    font-weight: 600;
                    color: #f98100;
                    padding-top: 18px;
                    padding-bottom: 25px;
                }

                &__description {
                    font-size: 15px;
                    color: #b5b5b5;
                }

                .button {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;    
                    padding-top: 25px;

                    &__item {
                        border-radius: 20px;
                        padding: 8px 20px;
                        margin-right: 15px;
                        font-size: 13px;
                        font-weight: 600;
                        transition: all .4s ease;
                        cursor: pointer;

                        &--book-now {
                            border: 2px solid #f98100;
                            color: #f98100;

                            &:hover {
                                background-color: #f98100;
                                color: #fff;
                            }
                        }

                        &--price-history {
                            border: 2px solid #79bd1a;
                            color: #79bd1a;

                            &:hover {
                                background-color: #79bd1a;
                                color: #fff;
                            }
                        }
                    }
                }
            }

            &__value {
                display: flex;
                align-items: flex-end;
                justify-content: center;
                flex-direction: column;
                border-left: 2px solid #ebebeb;
                min-width: 145px;
                padding-left: 20px;
                font-family: "Montserrat";

                &__nights {
                    font-size: 16px;
                    font-weight: 300;
                    color: #b2b0c0;

                    > span {
                        font-weight: 600;
                    }
                }

                &__price-total {
                    font-size: 30px;
                    font-weight: 600;
                    color: #79bd1a;
                    margin-top: 18px;
                }

                &__per-night {
                    font-size: 14px;
                    font-weight: 300;
                    color: #b2b0c0;
                    margin-top: 25px
                }

                &__price-night {
                    font-size: 20px;
                    font-weight: 600;
                    color: #f98100;
                    margin-top: 10px;
                }
            }

        }

        &__chart {
            font-family: "Montserrat", sans-serif;
            width: 100%;
            max-height: 238px;
            margin-left: 208px;

            &__graphic {
                position: relative;

                > div {
                    height: 185px;
                }
            }

            &__info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 40px;

                &__title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #F98100;
                    text-transform: uppercase;
                    letter-spacing: 1.82px;
                }

                &__back {
                    display: flex;
                    font-size: 12px;
                    color: #555555;
                    letter-spacing: 1.2px;

                    > img {
                        width: 25px;
                        height: 20px;
                    }

                    > p {
                        padding-left: 20px;
                    }
                }
            }
        }
    }
</style>