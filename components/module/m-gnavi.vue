<template>
  <nav class="m-gnavi">
    <a class="c-humburger"><span></span><span></span><span></span></a>
    <div class="m-gnavi__lists">
      <nav class="m-gnavi__lists__inner">
        <ul class="m-gnavi__lists__content">
          <li class="item is-active"><a href="#top">トップ</a></li>
          <li class="item" data-target="skill"><a href="#skill">何が出来るの？</a></li>
          <li class="item" data-target="profile"><a href="#profile">プロフィール</a></li>
          <li class="item" data-target="activity"><a href="#blog">最近の活動</a></li>
          <li class="item" data-target="contact"><a href="#contact">お問い合わせ</a></li>
        </ul> 
      </nav>
    </div>
  </nav>
</template>

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

.c-humburger{

  position: relative;
  display: block;
  width: 28px;
  height: 28px;

  @include media(l){
    display: none!important;
  }
  
  span{

    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 5px;
    background-color: #333;
    transition: all .3s;
    transform-origin: left;

    &:nth-child(1){

      .is-open & {
        width: calc(100% * 1.414);
        transform: translate3d(0, -50%, 0) rotate(45deg);
      }
    }

    &:nth-child(2){
      top: 50%;
      transform: translate3d(0,-50%,0);
      .is-open & {
        opacity: 0;
      }
    }

    &:nth-child(3){
      top: 100%;
      transform: translate3d(0,-100%,0);
      .is-open & {
        width: calc(100% * 1.414);
        transform: translate3d(0, -50%, 0) rotate(-45deg);
      }
    }
  }

}
</style>