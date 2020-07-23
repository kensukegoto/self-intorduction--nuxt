<template>
  <div class="container">
    <!-- <bHeader /> -->
    <bSkill />
    <bFooter />
  </div>
</template>

<script>
import bHeader from '~/components/block/b-header';
import bSkill from '~/components/block/b-skill';
import bFooter from '~/components/block/b-footer';

export default {
  components: {
    bHeader,
    bSkill,
    bFooter
  }
}
</script>
