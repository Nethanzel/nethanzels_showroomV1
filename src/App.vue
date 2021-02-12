<template>

  <div id="app">

    <div id="gBackground"></div>

    <div id="head">
      <thisHeader />
    </div>

    <div id="headText">
      <h1 id="title">Nethanzêl Abad</h1>
      <p>Web developer (Front end/Back end).</p>
      <p>Desktop developer.</p>
      <p>Close to graduate Systems and computing engenieer.</p>
    </div>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

  </div>

</template>

<script>
import thisHeader from '@/components/aboutHeader.vue'

export default {
  name: "App",
  title: "Nethanzêl's Showroom",
  components: {
    thisHeader
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Carme&display=swap');

*{
  color: #fff;
  padding: 0;
  margin: 0;
  font-family: 'Carme';
  letter-spacing: 1px;
}

#app {
  text-align: center;
  max-width: 1366px;
}

#gBackground {
  width: 300%;
  position: fixed;
  display: flex;
  z-index: -1;
  background: linear-gradient(-90deg, #fff 50%, #000 50%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform-origin: center;
  transition: transform 1s;
  overflow: hidden;
  top: -9998px;
  bottom: -9998px;
  left: -9998px;
  right: -9998px;
  margin: auto; 
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: .6s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

#title {
  font-size: 60px;
  font-weight: bold;
  transition: 0.5s ease-in-out;
  mix-blend-mode: difference;
  color: #fff;
}

#head {
  display: flex;
  position: fixed;
  width: 100%;
  height: 500px;
  visibility: hidden;
  opacity: 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.5s ease-in-out;
}

#headText {
  mix-blend-mode: difference;
  will-change: opacity;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 610px;
  padding-top: 20px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}


h1 {
  font-size: 50px;
}

@media only screen and (max-height: 800px) {
  #head {
    display: flex;
    position: fixed;
    width: 100%;
    height: 400px;
    visibility: hidden;
    opacity: 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }

  #headText{
    mix-blend-mode: difference;
    will-change: opacity;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 520px;
    padding-top: 20px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
}

@media screen and (max-width: 770px) {

  #title {
    font-size: 47px;
    font-weight: bold;
    transition: 0.5s ease-in-out;
    mix-blend-mode: difference;
    color: #fff;
  }

  #head {
    display: flex;
    position: fixed;
    width: 100%;
    height: 320px;
    visibility: hidden;
    opacity: 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }

  #headText {
    mix-blend-mode: difference;
    will-change: opacity;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 390px;
    padding-top: 20px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  #headText p {
    font-size: 11px;
  }

}



</style>