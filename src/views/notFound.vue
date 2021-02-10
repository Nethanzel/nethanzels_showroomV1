<template>
  <div class="notfound">
    <headeR />
    <div>
      <h1>You're missing something!.</h1>
      <h2>What you're looking for, is not here.</h2>
    </div>
  </div>
</template>

<script>
import headeR from '@/components/navegationMenu.vue'

export default {
  name: "notFound",
  title: "Nethanzêl Showroom (404)",
  components: {
    headeR
  }
}
</script>

<style scoped lang="scss">

.notfound {
  mix-blend-mode: difference;
  will-change: opacity;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

h1 {
  font-size: 75px;
  letter-spacing: 3px;
}

h2 {
  font-size: 35px;
  letter-spacing: 2px;
}

</style>