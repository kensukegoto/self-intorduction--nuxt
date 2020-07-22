<template>
  <a 
    class="c-humburger"
    @click="toggle">
  <span></span><span></span><span></span>
</a>
</template>

<script>
export default {
  methods: {
    toggle(){
      this.$emit("toggle");
    }
  }
}
</script>

<style lang="scss" scoped>

.c-humburger{

  position: relative;
  display: block;
  width: 28px;
  height: 28px;

  @include media(l){
    display: none!important;
  }
  
  span{

    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 5px;
    background-color: #333;
    transition: all .3s;
    transform-origin: left;

    &:nth-child(1){

      .is-open & {
        width: calc(100% * 1.414);
        transform: translate3d(0, -50%, 0) rotate(45deg);
      }
    }

    &:nth-child(2){
      top: 50%;
      transform: translate3d(0,-50%,0);
      .is-open & {
        opacity: 0;
      }
    }

    &:nth-child(3){
      top: 100%;
      transform: translate3d(0,-100%,0);
      .is-open & {
        width: calc(100% * 1.414);
        transform: translate3d(0, -50%, 0) rotate(-45deg);
      }
    }
  }

}
</style>