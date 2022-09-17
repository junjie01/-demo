<template>
  <div>App 根组件</div>
</template>

<script>
import { registerAPI } from '@/api'
export default {
  async created () {
    const res = await registerAPI()
    console.log(res)
  },
  name: 'App',
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
