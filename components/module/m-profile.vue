<template>
  <div class="m-profile">
    <cProfileImg 
      class="c-profile-img"
    />
    <cProfileList
      class="c-profile-list"
    />
  </div>
</template>

<script>
import cProfileImg from '~/components/component/c-profile-img';
import cProfileList from '~/components/component/c-profile-list';
export default {
  components: {
    cProfileImg,
    cProfileList
  }
}
</script>

<style lang="scss" scoped>
.m-profile{

  @include media(m){
    display: flex;
    justify-content: space-between;
  }
  @include media(l){
    width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
  .c-profile-img{
    @include media(m){
      width: calc(40% - 16px);
    }
    @include media(l){
      width: calc(31.25% - 36px);
    }
  }
  .c-profile-list{
    @include media(m){
      width: calc(100% - 40%);
    }
    @include media(l){
      width: calc(100% - 31.25%);
    }
  }
}
</style>