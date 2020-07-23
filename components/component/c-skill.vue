<template>
  <li class="c-skill">
    <p class="c-skill__txt">
      <b>{{ subject }}</b>
      <span>{{ verb }}</span>
    </p>
  </li>
</template>

<script>
export default {
  props:{
    subject:{
      type: String,
      required: true
    },
    verb:{
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-skill{

  &::before{
    content: "";
    margin: 0 auto;
    width: 36px;
    height: 36px;
    display: flex;
    background-image: url(/image/c-skill__icon.svg);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f9f038;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    @include media(l){
      width: 40px;
      height: 40px;
    }
  }

  &__txt{

    margin-top: 8px;
    @include media(l){
      margin-top: 16px;
    }
    b{
      font-size: 1.8rem;
      font-weight: bold;
      @include media(l){
        font-size: 2.4rem;
      }
    }

    span{
      margin-top: 8px;
      display: block;
      line-height: 1.75;
      @include media(l){
        margin-top: 16px;
        font-size: 1.6rem;
      }
    }
  }
}
</style>