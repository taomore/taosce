<template>
    <!-- main 部分 -->
    <div class="center">
        <!-- 面包屑导航组件 -->
        <!-- <gzt-nav-top/>        -->
        <!-- 下面的  -->
        <gzt-con-bottom/>  
    </div>
</template>
<script>
import gztConBottom from '../component/lvqi/gzt-con-bottom.vue'

export default {
    name:"gzt-center-com",
    components:{
        gztConBottom
    }
}
</script>
<style scoped>
.center{
    height: 100%;
    /* margin-top: 60px; */
    /* padding: 0 24px; */
    /* margin-left: 220px; */
    background: rgb(236, 240, 245);
}
</style>
