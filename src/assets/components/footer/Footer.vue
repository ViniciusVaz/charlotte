<template>
    <div class="footer">
        <div class="footer__social">
            <template v-for="(item, i) in social">
                <div  :key="i" class="footer__social__item" :class="`footer__social__item--${item.slug}`">
                    <a :href="item.link" :alt="item.slug" :title="item.slug"><img :src="item.img"/></a>
                </div>
            </template>
        </div>
        <div class="footer__copyright">
            <p>&copy 2004-2017 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                social: [
                    {
                        img: require("_img/facebook.svg"),
                        slug: 'facebook',
                        url: '#'
                    },
                    {
                        img: require("_img/twitter.svg"),
                        slug: 'twitter',
                        url: '#'
                    },
                    {
                        img: require("_img/instagram.svg"),
                        slug: 'instagram',
                        url: '#'
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .footer {
        margin-top: 120px;
        box-shadow: 0px 20px 66px 0px rgba(0, 0, 0, 0.75);

        &__social {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 35px;

            &__item {
                width: 44px;
                height: 44px;
                margin-right: 24px;
            }
        }

        &__copyright {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px 15px 40px 15px;

            > p {
                text-align: center;
                font-family: "Heebo";
                font-size: 12px;
                color: #b5b5b5;
            }
        }
    }
</style>
