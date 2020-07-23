<template>
  <div class="c-blog-more">
    <p class="c-blog-more__inner"><a href="">MORE</a></p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.c-blog-more{
  margin-top: 24px;
  text-align: right;
  padding: 0 16px;
  @include media(l){
    width: 960px;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
  }
  &__inner{
    display: inline-block;
  }
  a{
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    &::before{
      content: "";
      display: block;
      height: 2px;
      width: 48px;
      background-color: color(bk0);
      margin-right: 16px;
    }
  }

}
</style>