<template>
    <div>
        <Header />
        <GridWrapper />
        <Footer />
    </div>
</template>
<script>
    import Header from "_components/header/Header.vue"
    import GridWrapper from "_components/room/GridWrapper.vue"
    import Footer from "_components/footer/Footer.vue"

    export default {
        components: {
            Header,
            GridWrapper,
            Footer
        }
    }
</script>
