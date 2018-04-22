<template>
    <div class="filter" :class="{'filter--active': app.menu}">
        <div class="filter__header">
            <span class="filter__header__title">Filters</span>
            <span class="filter__header__close" @click="toogleMenu()"></span>
        </div>
        <div class="filter__content">
            <div class="filter__content__price-range price-range">
                <span class="price-range__title">Price Range per night</span>
                <div class="price-range__content">
                    <vue-slider 
                        v-model="filter.range.value"
                        :min="100"
                        :max="600"
                        :height="8"
                        :tooltip="false"
                        :process-style="{ backgroundColor: '#F98100' }"
                        :slider-style="[{
                            width: '23px',
                            height: '23px',
                            top: '-8px',
                            border: '4px solid #F98100',
                            backgroundColor: '#fff',
                            boxShadow: 'none'
                        },{
                            width: '23px',
                            height: '23px',
                            top: '-8px',
                            border: '4px solid #F98100',
                            backgroundColor: '#fff',
                            boxShadow: 'none'
                        }]"
                        :width="310">
                    </vue-slider>
                    <div class="price-range__content__values values">
                        <p class="values__price">Min <span>${{ filter.range.value[0] }}</span></p>
                        <p class="values__price">Max <span>${{ filter.range.value[1] }}</span></p>
                    </div>
                </div>
            </div>
            <div class="filter__content__star-rating star-rating">
                <span class="star-rating__title">Stars</span>
                <div class="star-rating__line" v-for="(line, index) in stars" :key="index" @click="setRating(line)">
                    <div class="star-rating__line__checkbox" :class="{'star-rating__line__checkbox--active': line.active}"></div>
                    <div class="star-rating__line__item" :class="{'star-rating__line__item--active': i <= index}" v-for="(star, i) in stars" :key="i">
                        <span :key="i"></span>
                    </div>   
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from "vuex"
	import vueSlider from 'vue-slider-component'

    export default {
        data() {
            return {
                filter: {
					range: {
						value: [100, 600]
                    }
                },
                stars: [
                    {
                        value: 1,
                        active: true
                    },
                    {
                        value: 2,
                        active: true
                    },
                    {
                        value: 3,
                        active: true
                    },
                    {
                        value: 4,
                        active: true
                    },
                    {
                        value: 5,
                        active: true
                    },
                ]
            }
        },
        computed: {
            ...mapState([
                "filters",
                "app"
            ])
        },
        watch: {
            filter: {
				handler (data) {
                    const range = {
                        label: "priceRange",
                        value: data.range.value
                    }

                    this.setFilter(range)
                    this.updateRooms()
				},
				deep: true
            }
        },
        methods: {
            ...mapActions([
                "getRooms",
                "setFilter",
                "toogleMenu"
            ]),
            setRating(item) {
                let data = ""

                this.stars.map(star => {
                    if(star.value == item.value) {
                        star.active = !star.active
                    }

                    if(star.active) {
                        data += `${star.value},`
                    }

                })
                
                const stars = {
                    label: "stars",
                    value: data
                }

                this.setFilter(stars)
                this.updateRooms()
            },
            updateRooms() {
                this.getRooms(`stars=${this.filters.stars}&minPrice=${this.filters.priceRange[0]}&maxPrice=${this.filters.priceRange[1]}`) 
            }
        },
        components: {
            vueSlider
        }
    }
</script>
<style lang="scss" scoped>
    .filter {
        font-family: "Montserrat";

        @media screen and (max-width: 1200px) {
            position: fixed;
            top: 0;
            left: -100%;
            opacity: 0;
            width: 365px;
            height: 100%;
            z-index: 10;
            transition: all .4s ease;
        }

        &--active { 
            @media screen and (max-width: 1200px) {
                left: 0;
                opacity: 1;
                background-color: #fff;
                box-shadow: 9px 6px 46px -10px rgba(0, 0, 0, 0.75);
                padding: 20px 20px 20px 25px;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
            }
        }

        &__header {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;

            &__title {
                display: block;
                font-size: 22px;
            }

            &__close {
                @media screen and (max-width: 1200px){
                    background-image: url("~_img/close.svg");
                    background-repeat: no-repeat;
                    background-position: center;
                    width: 35px;
                    height: 35px;
                }
            }
        }

        &__content {
            .price-range {
                display: flex;
                flex-direction: column;
                padding-bottom: 30px;
                border-bottom: 1px solid #e3e3e3;

                &__title {
                    font-size: 13px;
                    color: #b5b5b5;
                    font-family: "Heebo";
                    margin-bottom: 10px;
                }

                &__content {
                    .values {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 10px;

                        &__price {
                            width: 50px;
                            font-family: "Heebo";
                            font-size: 14px;
                            color: #b5b5b5;

                            > span {
                                font-size: 22px;
                                color: #f98100;
                                font-weight: bold;
                            }

                            &:not(:first-child) {
                                text-align: right;
                            }
                        }
                    }
                }
            }

            .star-rating {
                display: flex;
                flex-direction: column;
                margin-top: 15px;

                &__title {
                    font-family: "Heebo";
                    font-size: 13px;
                    color: #b5b5b5;
                    margin-bottom: 10px;
                }

                &__line {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    margin-bottom: 5px;

                    &__checkbox {
                        width: 20px;
                        height: 20px;
                        border-radius: 5px;
                        border: 3px solid #ffbb72;
                        margin-right: 5px;

                        &--active {
                            background-image: url('~_img/check.png');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }

                    &__item {
                        display: flex;

                        > span {
                            width: 26px;
                            height: 26px;
                            background-image: url('~_img/star-outline.svg');

                        }

                        &--active {
                            > span {
                                background-image: url('~_img/star-filled.svg');
                            }
                        }
                    }
                }
            }
        }
    }
</style>