<template>
  <div class="container">
    <!-- <bHeader /> -->
    <bSkill />
    <bProfile />
    <bBlog />
    <bContact />
    <bFooter />
  </div>
</template>

<script>
import bHeader from '~/components/block/b-header';
import bSkill from '~/components/block/b-skill';
import bProfile from '~/components/block/b-profile';
import bBlog from '~/components/block/b-blog';
import bContact from '~/components/block/b-contact';
import bFooter from '~/components/block/b-footer';


export default {
  components: {
    bHeader,
    bSkill,
    bProfile,
    bBlog,
    bContact,
    bFooter
  }
}
</script>
