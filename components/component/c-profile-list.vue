<template>
  <dl class="c-profile-list">
    <dt>出身</dt>
    <dd>茨城県土浦市（千葉県松戸市にも長く住んでいました）</dd>
    <dt>趣味</dt>
    <dd>音楽鑑賞（韻シストとMariah Careyが好きです）、新しい知識の習得、キックボクシング、映画、アニメ（ガンダムならオリジンと鉄血のオルフェンズが好きです）</dd>
    <dt>好きな言葉</dt>
    <dd>「好きこそ物の上手なれ」</dd>
    <dd>「人事を尽くして天命を待つ」</dd>
    <dt>将来の夢</dt>
    <dd>猫がいる職場で猫に邪魔されながら仕事をすること</dd>
    <dd>プログラミングで人生を変えたいと思っている人の助けになること</dd>
    <dd>従業員それぞれが自己実現をするための会社を作ること</dd>
  </dl>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.c-profile-list{

  margin-top: 16px;
  @include media(m){
    margin-top: 0;
  }

  dt{
    margin-top: 16px;
    font-weight: bold;
    font-size: 1.8rem;
    &:first-child{
      margin-top: 0;
    }

    @include media(l){
      margin-top: 32px;
      font-size: 2rem;
    }
  }
  dd{
    margin-top: 8px;
    line-height: 1.75;
    @include media(l){
      margin-top: 16px;
    }
  }
}
</style>