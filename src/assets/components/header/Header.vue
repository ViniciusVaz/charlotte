<template>
    <div class="header">
        <div class="header__background"></div>
        <div class="header__content">
            <ul class="header__content__menu">
                <li class="header__content__menu__item" v-for="(item, index) in menu" :key="index">
                    <a :href="item.url">{{item.label}}</a>
                </li>
            </ul>
            <div class="header__content__logo">  
                <span class="header__content__logo__description">Welcome To</span>
                <span class="header__content__logo__description header__content__logo__description--title">Charlotte</span>
                <span class="header__content__logo__description">The Queen City</span>
            </div>
            <Calendar />
        </div>
    </div>
</template>
<script>
    import Calendar from "_components/calendar/Calendar.vue"

    export default {
        data() {
            return {
                menu: [
                    { label: "The Queen city", url: "" },
                    { label: "My Reservations", url: "" },
                    { label: "Guide", url: "" }
                ]
            }
        },
        components: {
            Calendar
        }
    }
</script>
<style lang="scss" scoped>

    @mixin underline {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
    }

    .header {
        &__background { 
            background-image: url('~_img/hero.jpg');
            background-position: top center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 650px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }

        &__content {
            padding: 0 50px;

            @media screen and (max-width: 768px) {
                padding: 0 15px;
            }

            &__menu {
                display: flex;
                padding-top: 35px;

                &__item {
                    font-family: "Heebo";
                    font-size: 15px;
                    padding-right: 26px;

                    @media screen and (max-width: 425px) {
                        justify-content: space-between;
                        text-align: center;
                    }

                    > a {
                        color: #fff;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            &__logo {
                display: flex;
                flex-direction: column;
                text-align: center;
                justify-content: center;
                color: #fff;
                margin-top: 88px;

                @media screen and(max-width: 425px) {
                    margin-top: 45px;
                }

                &__description {
                    font-family: "Montserrat", sans-serif;
                    font-size: 22px;
                    font-weight: 600;
                    text-transform: uppercase;
                    position: relative;

                    @media screen and (max-width: 768px) {
                        font-size: 18px;
                    }

                    &:first-child {
                        padding-top: 60px;
                            
                        @media screen and (max-width: 425px) {
                            padding-top: 50px;
                        }

                        &:before {
                            content: url("~_img/crown.svg");
                            width: 56px;
                            height: 46px;
                            position: absolute;
                            top: 0;
                            left: 50%;
                            transform: translateX(-50%);

                            @media screen and (max-width: 425px) {
                                width: 40px;
                            }
                        }
                    }
                }

                &__description--title {
                    font-size: 76px;
                    padding: 0 15px;
                    margin: 14px auto;

                    @media screen and (max-width: 768px) {
                        font-size: 55px;
                    }

                    @media screen and (max-width: 425px) {
                        font-size: 30px;
                        margin: 10px auto;
                    }

                    &:after {
                        @include underline;
                        top: 0;
                        left: 0;
                    }

                    &:before {
                        @include underline;
                        bottom: 0;
                        left: 0;
                    }
                }
            }
        }
    }
</style>