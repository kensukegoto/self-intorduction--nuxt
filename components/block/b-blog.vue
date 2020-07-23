<template>
  <section class="b-blog" id="blog">
    <cHeading 
      title="最近の活動"
      sub="BLOG"
    />
    <mBlog
      class="b-blog__inner"
      :blogs="blogs"
    />
    <cBlogMore />
  </section>
</template>

<script>
import cHeading from "../component/c-heading";
import mBlog from "../module/m-blog";
import cBlogMore from "../component/c-blog-more";

export default {
  components: {
    cHeading,
    mBlog,
    cBlogMore
  },
  data:()=>{
    return {
      blogs : [
        {title:"「Hello,GitHub」に参加しました",date:"2020.3.8",img:"c-blog--01.jpg"},
        {title:"「Hello,GitHub」に参加しました",date:"2020.3.8",img:"c-blog--02.jpg"},
        {title:"「Hello,GitHub」に参加しました",date:"2020.3.8",img:"c-blog--03.jpg"}
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  
.b-blog{
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
    @include media(l){
      width: 960px;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
    }
  }

}
</style>