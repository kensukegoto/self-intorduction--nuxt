<template>
  <figure class="b-mv__man c-man"><img src="/image/b-mv__man.png" alt="後藤謙介の写真"></figure>
</template>

<style lang="scss" scoped>
.c-man{
  position: absolute;
  bottom: 0;
  right: 0;
  height: 90%;
  z-index: 2;
  @include media(m){
    right: 10%;
  }
  @include media(l){
    height: 560px;
    right: 0;
  }
  img{
    max-height: 100%;
  }
}
</style>