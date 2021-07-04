<template>
  <div class="c-copy"><p><span>あなたの熱意を<br>熱々に実装</span></p></div>
</template>

<style lang="scss" scoped>
.c-copy{
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
  z-index: 3;
  background-color: rgba(color(wh),.8);
  @include media(m){
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
  @include media(l){
    left: 0;
    padding: 0 24px 24px 0;
    margin-left: 5px;
    background-color: transparent;
  }
  p{
    padding: .375em 14px;
    margin: 3px;
    position: relative;
    background-color: color(wh);
    font-size: 2.0rem;
    line-height: 1.75;
    font-weight: bold;
    text-align: center;
    @include media(m){
      margin: 0;
    }
    @include media(l){
      font-size: 4rem;
      padding-left: 48px;
      padding-right: 48px;
    }
    &::before,&::after{
      content: "";
      display: block;
      width: 32px;
      height: 32px;
      background-color:#aaa;
      position: absolute;
      top: -3px;
      left: -3px;
      z-index: -1;
      @include media(l){
        top: -5px;
        left: -5px;
      }
    }
    &::after{
      top: auto;
      left: auto;
      bottom: -3px;
      right: -3px;
      @include media(l){
        top: auto;
        left: auto;
        bottom: -5px;
        right: -5px;
      }
    }
    span{
      display: inline-block;
      text-align: left;
    }
  }
}
</style>