<template>
  <section class="b-mv">
    <div class="b-mv__inner">
      <cCopy />
      <!-- <figure class="b-mv__cloud c-cloud"></figure> -->
      <cMan />
    </div>
  </section>
</template>

<script>
import cMan from "../component/c-man";
import cCopy from "../component/c-copy";
export default {
  components:{
    cMan,
    cCopy
  }
}
</script>

<style lang="scss" scoped>
.b-mv{

  overflow: hidden;

  &__inner{
    margin-top: 60px;
    height: 224px;
    position: relative;
    @include media(l){
      width: 960px;
      height: 616px;
      margin-top: 80px;
      margin-right: auto;
      margin-left: auto;
    }
  }

}
</style>