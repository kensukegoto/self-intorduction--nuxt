<template>
  <nav class="m-gnavi">
    <cHumburger @toggle="toggleHumburger" />
    <div class="m-gnavi__lists">
      <nav class="m-gnavi__lists__inner">
        <ul class="m-gnavi__lists__content">
          <li @click.prevent="moveTo('top')" class="item is-active"><a href="#top">トップ</a></li>
          <li @click.prevent="moveTo('skill')" class="item" data-target="skill"><a href="#skill">何が出来るの？</a></li>
          <li @click.prevent="moveTo('profile')" class="item" data-target="profile"><a href="#profile">プロフィール</a></li>
          <li @click.prevent="moveTo('blog')" class="item" data-target="activity"><a href="#blog">最近の活動</a></li>
          <li @click.prevent="moveTo('contact')" class="item" data-target="contact"><a href="#contact">お問い合わせ</a></li>
        </ul> 
      </nav>
    </div>
  </nav>
</template>

<script>
import cHumburger from "../component/c-humburger";
export default {
  components : {
    cHumburger
  },
  methods : {
    toggleHumburger(){
      const gnavi = document.querySelector(".m-gnavi");
      gnavi.classList.toggle("is-open");
    },
    moveTo(target){

      const gnavi = document.querySelector(".m-gnavi");
      gnavi.classList.remove("is-open");

      let top = 0;
          
      if(target !== "top"){
        // 画面上部から要素までの距離
        const rectTop = document.querySelector(`#${target}`);
        if(!rectTop) return;
        
        rectTop.getBoundingClientRect().top;
        // 現在のスクロール距離
        const offsetTop = window.pageYOffset
        // スクロール位置に持たせるバッファ
        const buffer = (window.innerWidth > 959) ? 80 : 60;
        top = rectTop + offsetTop - buffer
      }

      
      window.scrollTo({
        top,
        behavior: "smooth"
      });


    }
  },
  mounted(){

    return;
      const items = document.querySelectorAll(".m-gnavi .item");
      for(let item of items){
        item.addEventListener("click",function(e){
          e.preventDefault();
          gnavi.classList.remove("is-open");
          let target = this.querySelector("a").getAttribute("href");

          let top = 0;
          
          if(target !== "#top"){
            // 画面上部から要素までの距離
            const rectTop = document.querySelector(target).getBoundingClientRect().top;
            // 現在のスクロール距離
            const offsetTop = window.pageYOffset
            // スクロール位置に持たせるバッファ
            const buffer = (window.innerWidth > 959) ? 80 : 60;
            top = rectTop + offsetTop - buffer
          }

          
          window.scrollTo({
            top,
            behavior: "smooth"
          });
          
        });
      }
  }
}
</script>

<style lang="scss" scoped>
@include media(u-l){

  .m-gnavi{

    $root: &;

    // オープン：モーダルの背景
    &.is-open::before{
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      background-color: rgba(color(bk0),.5);
      height: 100vh;
      width: 100vw;
    }
    
    &__lists{
      
      opacity: 0;
      transform: translateY(-100%);
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: color(wh);
      transition: transform .3s;
      z-index: -1;
      text-align: center;
  
      // オープン：メニューを表示
      #{$root}.is-open &{ 
        opacity: 1;
        transform: translateY(0%);

      }

      li{
        margin-top: 2em;
        &:last-child{
          margin-bottom: 2em;
        }
      }

    }
    
  }
}

@include media(l){

  .m-gnavi__lists__content{

    display: flex;

    .item{
      $item: &;
      font-size: 1.6rem;
      font-weight: bold;
      margin-right: 60px;
      position: relative;
      transition: color .1s;

      &:hover{
        color: color(accent2);
      }

      &:last-child{
        margin-right: 16px;
      }

      &::before{
        $before: &;
        content: "";
        display: block;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        position: absolute;
        transform: translate(-100%,-50%);
        top: 50%;
        left: -8px;
        background-color: color(wh);
        transition: background-color .1s;

        @at-root #{$item}.is-active::before{
          background-color: color(accent);
        }

        @at-root #{$item}:hover::before{
          background-color: color(accent2);
        }

      }
    
    }
  }

}
</style>