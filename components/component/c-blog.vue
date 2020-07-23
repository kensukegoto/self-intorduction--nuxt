<template>
  <li class="c-blog">
    <figure class="c-blog__img"><img v-bind:src="`/image/${img}`" alt=""></figure>
    <div class="c-blog__txt">
      <p class="c-blog__title">{{ title }}</p>
      <time class="c-blog__date">{{ date }}</time>
    </div>
  </li>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required: true
    },
    date:{
      type: String,
      required: true
    },
    img:{
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.c-blog{
  width: 100%;
  padding-top: 8px;
  padding-left: 8px;
  margin-top: 20px;
  position: relative;
  z-index: 0;
  &:first-child{
    margin-top: 0;
  }

  @include media(m){
    margin-top: 0;
    width: calc(33% - (16px * 2) / 3 );
    &::last-child{
      width: calc(34% - (16px * 2) / 3 );
    }

  }
  @include media(l){
    padding-top: 16px;
    padding-left: 16px;
  }

  &__img{
    &::before{
      content: "";
      width: calc(100% - 8px);
      padding-bottom: 65.51%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: color(accent);
      z-index: -1; // スタックコンテキストの下のレイヤーになる
      @include media(l){
        width: calc(100% - 16px);
      }
    }
    img{
      width: 100%;
    }
  }
  &__txt{
    background-color: color(wh);
    padding: 8px;
    padding-bottom: 16px;
    @include media(l){
      padding: 16px;
    }
  }
  &__title{
    line-height: 1.75;
    font-weight: bold;
    @include media(l){
      font-size: 1.8rem;
    }
  }
  &__date{
    @include date;
    padding-top: 4px;
    text-align: right;
    display: block;
    font-size: 1.4rem;
    @include media(l){
      padding-top: 8px;
    }
  }

}
</style>