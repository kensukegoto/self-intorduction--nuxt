<template>
  <section class="b-mv">
    <div class="b-mv__inner">
      <cCopy />
      <cCloud />
      <cMan />
    </div>
  </section>
</template>

<script>
import cMan from "../component/c-man";
import cCopy from "../component/c-copy";
import cCloud from "../component/c-cloud";
export default {
  components:{
    cMan,
    cCopy,
    cCloud
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