<template>
  <ul class="m-skills">
    <cSkill 
      class="c-skill"
      subject="HTML•SCSS" 
      verb="を使いウェブサイトを作成する" />
    <cSkill 
      class="c-skill"
      subject="JavaScript" 
      verb="を使いサイトに動きを付ける" />
    <cSkill 
      class="c-skill"
      subject="WordPress" 
      verb="でブログ付きのウェブサイト作成する" />
    <cSkill 
      class="c-skill"
      subject="Node.js" 
      verb="を使い各種データベースと連携するシステムを作成する" />
    <cSkill 
      class="c-skill"
      subject="PHP" 
      verb="を使いGoogleスプレッドシートと連携するようなアプリを作成する" />
    <cSkill 
      class="c-skill"
      subject="AWS" 
      verb="を活用し低費用で負荷に強いサービスを作成する" />
  </ul>
</template>

<script>
import cSkill from "../component/c-skill";
export default {
  components:{
    cSkill
  }
}
</script>

<style lang="scss" scoped>
.m-skills{

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .c-skill{

    width: calc(50% - 4px);
    text-align: center;
    margin-top: 20px;
    @include media(m){
      width: calc(33% - (16px * 2)/3);
      &:nth-child(3n){
        width: calc(34% - (16px * 2)/3);
      }
    }
    @include media(l){
      margin-top: 32px;
    }
  
  }
}
</style>