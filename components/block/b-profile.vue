<template>
  <section class="b-profile" id="profile">
    <cHeading 
      title="プロフィール"
      sub="PROFILE"
    />
    <mProfile
      class="b-proffile__inner"
    />
  </section>
</template>

<script>
import cHeading from "../component/c-heading";
import mProfile from "../module/m-profile";

export default {
  components: {
    cHeading,
    mProfile
  }
}
</script>

<style lang="scss" scoped>
.b-profile{
  padding-top: 24px;
  padding-bottom: 48px;
  @include media(l){
    padding-top: 32px;
  }

  &__inner{
    margin-top: 20px;
    margin-right: 16px;
    margin-left: 16px;
    @include media(l){
      width: 960px;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
    }
  }

}
</style>