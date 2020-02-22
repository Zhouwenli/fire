<template>
  <div>
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'index',
  components: {
    TabBar
  }
}
</script>
