<template>
    <div class="homeView">
        <img v-for="(item, index) in imgs" :src="item" alt="" :key="index"> </div>
</template>

<script>
//引入子组件

import allImgPreloader from './preloadUtil.js'
export default {
    name: "HomeView",
    //注册子组件
    components: {

    },
    data() {
        return {
            imgs: [ //require相对路径
                require('../../imgs/pic1.png'),
                require('../../imgs/pic2.png'),
                require('../../imgs/pic3.png'),
                require('../../imgs/pic4.png'),
                require('../../imgs/pic5.png'),
                require('../../imgs/pic6.png'),
            ]
        }
    },
    created() {
        this.begin()
    },
    methods: {
        /**
         * 异步function 处理onload
         */
        preImg() {
            //调用
            return allImgPreloader(this.imgs)
        },
        async begin() {
            //预加载时展示加载loading
            const toast = this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: true,
                message: '预加载中...'
            });
            let resultList = await this.preImg()
            window.console.log('list', resultList)
            //promise执行完毕 做后面的逻辑 比如清除loading
            toast.clear()
        }
    }
}
</script>

<style scoped>
.homeView {
    width: 80%;
    height: auto;
    margin: auto;

}

img {
    width: 100px;
    height: 100px;
}
</style>

