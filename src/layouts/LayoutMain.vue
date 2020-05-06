<template>
  <div>
    <img alt="Vue logo" :src="images.logo" />
    <router-view />
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'LayoutMain',
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['images']),
  },
}
</script>

<style scoped></style>
