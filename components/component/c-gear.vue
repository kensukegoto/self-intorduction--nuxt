<template>
  <figure class="c-gear">
    <img class="c-gear--1" src="/image/c-gear--1.svg" alt="">
    <img class="c-gear--2" src="/image/c-gear--2.svg" alt="">
    <img class="c-gear--3" src="/image/c-gear--3.svg" alt="">
  </figure>
</template>

<script>
import Resizer from "@/assets/js/Resizer";

export default {
  mounted(){

    main();
    new Resizer(main);

    function main(){

      const gear = document.querySelector(".c-gear");

      const [w,h] = [
        gear.clientWidth,
        gear.clientHeight
      ]


      const size = [
        {
          width: w * 0.614678 + "px",
          height: w * 0.614678 + "px",
          top: 0,
          left: 0
        },
        {
          width: w * 0.536697 + "px",
          height: w * 0.536697 + "px",
          bottom: 0,
          left: w * 0.204128 + "px"
        },
        {
          width: w * 0.385321 + "px",
          height: w * 0.385321 + "px",
          top: h * 0.31458 + "px",
          right: 0
        }
      ]

      for(let i = 1,l = size.length; i <= l; i++){
        let ele = gear.querySelector(`img:nth-child(${i})`)
        for(var k in size[i - 1]){
          ele.style[k] = size[i- 1][k]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-gear{
  position: absolute;
  z-index: -1;
  left:50%;
  top: 50%;
  transform: translate(-50%,-50%);  
  width: 90%;

  @include media(m){
    width: 25%;

  }
  @include media(l){
    width: 280px;

  }

  &::after{
    content: "";
    display: block;
    padding-bottom: 110.0917%;
  }

  img{
    width: 100%;
  }

  &--1{
    position: absolute;
    animation-name: rotate-reverse;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &--2{
    position: absolute;
    animation-name: rotate;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &--3{
    position: absolute;
    animation-name: rotate-reverse;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}


@keyframes rotate{
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes rotate-reverse{
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}
</style>