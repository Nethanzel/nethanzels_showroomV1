<template>
  <div class="contact">
    <headeR />
    <h1>Get in touch with me!</h1>
    <div class="infoCont">
      
    </div>

  </div>
</template>

<script>
import headeR from '@/components/navegationMenu.vue'

export default {
  name: "Contact",
  title: "Nethanzêl's Showroom", 
  components: {
    headeR
  }
  
}
</script>

<style scoped lang="scss">

.contact {
  mix-blend-mode: difference;
  will-change: opacity;
  padding-top: 60px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.infoCont {
  border: 2px solid #fff;
  width: 60%;
  height: 200px;
  background: #99999923;
}

h1 {
  margin-bottom: 25px;
}
</style>