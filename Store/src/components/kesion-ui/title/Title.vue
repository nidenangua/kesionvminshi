<template>
    <div class="ks-title" :style="{borderBottom:border}" :class="plain && 'ks-title--plain'">
        {{name}}
        <slot />
    </div>
</template>
<script>
export default {
    name:'KsTitle',
    props:{
        name:String,
        plain:Boolean,
        border:{
            type:String,
            default:'1px solid #eee'
        }
    }
}
</script>
<style lang="scss" scoped>
.ks-title{
    padding-bottom: 15px;
    font-size: 18px;
    line-height: 40px;
}
.ks-title--plain{
    font-size: 16px;
    font-weight: bold;
    position: relative;
    height: 24px;
    line-height: 24px;
    border-bottom: 0px !important;
}
.ks-title--plain::before{
    content: "";
    position: relative;
    top: 1px;
    display: inline-block;
    margin-right: 10px;
    width: 2px;
    height: 14px;
    background-color: $primary-color;
}
</style>

