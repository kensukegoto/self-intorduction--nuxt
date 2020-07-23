<template>
  <h2 class="c-heading">
    <span>{{ sub }}</span>
    <b>{{ title }}</b>
  </h2>
</template>

<script>
export default {
  props:{
    sub:{
      type: String,
      required: true
    },
    title:{
      type: String,
      required: true
    },
  }
}
</script>
<style lang="scss" scoped>
.c-heading{
  text-align: center;
  span {
    @include english;
    color: #555;
    display: block;
    font-size: 1.2rem;
    @include media(l){
      font-size: 1.6rem;
    }
  }
  b{
    margin-top: 4px;
    display: block;
    font-size: 2.4rem;
    @include media(l){
      margin-top: 16px;
      font-size: 4rem;
    }
  }
}
</style>