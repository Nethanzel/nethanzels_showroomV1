<template>
  <div class="home">
    <router-link to="/about">
        <img id="img" alt="logo" src="../assets/update.svg">
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  title: "Nethanzêl's Showroom",
  data() {
    return {
      x: 0,
      rotate: undefined,
      dif: 90,
      interval: undefined,
      show: true
    }
  },

  mounted(){
    this.interval = setInterval(() => {
      this.rotate = document.getElementById("gBackground")
      this.x += this.dif;
      if(this.x > 360) {
        this.dif = -90;
      }else if (this.x <= 0) {
        this.dif = 90
      }
      if(this.rotate != null) {this.rotate.style.transform = `rotate(${this.x}deg)`}
    }, 3500)
  },
  methods: {

  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    width: 100vw;
    display: flex;

    mix-blend-mode: difference; 
    will-change: opacity;
}

#img {
  width: 60vw;
  transition: opacity 2s;

  position: fixed;
  top: -9998px;
  bottom: -9998px;
  left: -9998px;
  right: -9998px;
  margin: auto;
  cursor: pointer;
}

</style>

