<template>
  <ul class="m-blogs">
    <cBlog
      v-for="(blog,i) in blogs"
      :title="blog.title"
      :date="blog.date"
      :img="blog.img"
      :key="i"
    />
  </ul>
</template>

<script>
import cBlog from "../component/c-blog";
export default {
  props:{
    blogs:{
      type: Array,
      required: true
    },
  },
  components:{
    cBlog
  }
}
</script>

<style>
.m-blogs{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>