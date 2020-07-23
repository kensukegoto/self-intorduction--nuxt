<template>
  <figure class="c-cloud"></figure>
</template>

<script>
import makeWordCloud from "@/assets/js/makeWordCloud";

export default {
  async mounted(){
    makeWordCloud();

  }
}
</script>

<style lang="scss" scoped>
.c-cloud{

  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translate(-50%,-50%);
  overflow: hidden;
  @include media(l){
    left: 300px;
    transform: translateY(-50%);
  }
  img{
    width: 100%;
    height: 100%;
  }
}
</style>