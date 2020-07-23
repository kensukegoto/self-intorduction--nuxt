<template>
  <section class="b-skill" id="skill">
    <cHeading 
      title="何が出来るの？"
      sub="skill"
    />
    <div class="b-skill__inner">
      <mSkill />
      <cGear />
    </div>
  </section>
</template>

<script>
import cHeading from "../component/c-heading";
import mSkill from "../module/m-skill";
import cGear from "../component/c-gear";

export default {
  components: {
    cHeading,
    mSkill,
    cGear
  }
}
</script>

<style lang="scss" scoped>
.b-skill{
  background-color: color(main);
  padding-top: 24px;
  padding-bottom: 48px;

  @include media(l){
    padding-top: 32px;
  }

  &__inner{
    margin-top: 20px;
    margin-right: 16px;
    margin-left: 16px;
    padding: 0 8px;
    padding-bottom: 20px;
    background-color: color(base);
    position: relative;
    z-index: 0;
    @include media(l){
      width: 960px;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 16px;
      padding-bottom: 32px;
    }
  }

}
</style>