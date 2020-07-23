<template>
  <header class="b-header">
    <div class="b-header__inner">
      <cTitle />
      <mGnavi />
    </div>
  </header>
</template>

<script>
import cTitle from "../component/c-title";
import mGnavi from "../module/m-gnavi";

export default {
  components: {
    cTitle,
    mGnavi
  }
}
</script>

<style lang="scss" scoped>
.b-header{
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 10;
  @include media(l){
    height: 80px;
  }
  &__inner{
    height: 100%;
    width: 100%;
    border-bottom: 5px solid color(accent);
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }

}
</style>