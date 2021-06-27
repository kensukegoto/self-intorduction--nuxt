<template>
  <h1 class="c-title" v-kensuke-click>
    <!-- nameは必ず変数名 -->
    <b v-hello-arg:後藤謙介="name">後藤謙介</b><span @click="fire">情熱をぶつけあいたい系エンジニア</span>
  </h1>
</template>

<script>
export default {
  data: () => {
    return {
      name : "c-title"
    }
  },
  methods: {
    fire : function(){
      this.$eventBus.$emit('fire')
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-title{

    // display: flex;
    // align-items: center;

    b{
      font-size: 20px;
      font-weight: bold;
    }

    span{
      margin-left: 6px;
      font-size: 10px;
    }
  }
</style>