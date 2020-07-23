<template>
  <div class="container">
    <bHeader />
    <bMv />
    <bSkill />
    <bProfile />
    <bBlog />
    <bContact />
    <bFooter />
  </div>
</template>

<script>
import bHeader from '~/components/block/b-header';
import bMv from '~/components/block/b-mv';
import bSkill from '~/components/block/b-skill';
import bProfile from '~/components/block/b-profile';
import bBlog from '~/components/block/b-blog';
import bContact from '~/components/block/b-contact';
import bFooter from '~/components/block/b-footer';


export default {
  components: {
    bHeader,
    bMv,
    bSkill,
    bProfile,
    bBlog,
    bContact,
    bFooter
  }
}
</script>
