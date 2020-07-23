<template>
  <div class="container">
    <!-- <bHeader /> -->
    <bSkill />
    <bProfile />
    <bFooter />
  </div>
</template>

<script>
import bHeader from '~/components/block/b-header';
import bSkill from '~/components/block/b-skill';
import bProfile from '~/components/block/b-profile';
import bFooter from '~/components/block/b-footer';

export default {
  components: {
    bHeader,
    bSkill,
    bProfile,
    bFooter
  }
}
</script>
