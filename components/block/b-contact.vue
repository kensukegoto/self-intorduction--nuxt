<template>
  <section class="b-contact" id="contact">
    <cHeading 
      title="お問い合わせ"
      sub="contact"
    />
    <div class="b-contact__inner">
      <p>準備中</p>
    </div>
  </section>
</template>

<script>
import cHeading from "../component/c-heading";

export default {
  components: {
    cHeading
  }
}
</script>

<style lang="scss" scoped>
.b-contact{
  padding-top: 24px;
  padding-bottom: 48px;
  @include media(l){
    padding-top: 32px;
  }

  &__inner{
    display: table;
    height: 100px;
    width: 100%;
    text-align: center;
    
    p{
      display: table-cell;
      vertical-align: middle;
    }
  }

}
</style>