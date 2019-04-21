<template>
    <div id="app">
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from'./components/Footer/Footer.vue'
    export default{
        components:{
            Footer
        }
    }
</script>

<style lang="stylus" rel="styleshet/stylus">
    .app
        width 100%
        height  100%
        background #f5f5f5
</style>