<template>
  <figure class="c-profile-img"><img src="/image/c-profile-img.jpg" alt=""></figure>
</template>

<style lang="scss" scoped>
.c-profile-img {
  padding-top: 8px;
  padding-left: 8px;
  position: relative;
  @include media(l){
    padding-top: 16px;
    padding-left: 16px;
  }
  &::before{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 8px);
    padding-bottom: calc(118% - 8px);
    background-color: color(accent);
    z-index: -1;
    @include media(l){
      width: calc(100% - 16px);
      padding-bottom: calc(118% - 16px);
    }
  }
  img{width: 100%;}
}
</style>