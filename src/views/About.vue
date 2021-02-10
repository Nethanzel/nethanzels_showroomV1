<template>
  <div class="about">
    <headeR />
    <div id="screener"></div>
    <div id="topDiv" class="infoCont">

    </div>

    <div class="infoCont">

    </div>
  </div>
</template>

<script>
import headeR from '@/components/navegationMenu.vue'


export default {
  name: "About",
  title: "Nethanzêl's Showroom", 
  components: {
    headeR,
  },
  mounted() {
    document.getElementById("head").style.opacity = "1";
    document.getElementById("head").style.visibility = "visible";

    document.getElementById("headText").style.opacity = "1";
    document.getElementById("headText").style.visibility = "visible";
  
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("head").style.height = "220px";
        document.getElementById("headText").style.height = "320px";
        document.getElementById("head").style.paddingTop = "20px";
        document.getElementById("title").style.fontSize = "40px"

        document.getElementById("photo").style.height = "170px";
        document.getElementById("photo").style.width = "170px";
      } else {
        let windowHeigth = window.matchMedia("(max-height: 800px)")

        if(windowHeigth.matches) {
          document.getElementById("head").style.height = "400px";
          document.getElementById("head").style.paddingTop = "0";

          document.getElementById("headText").style.height = "520px";
          document.getElementById("title").style.fontSize = "60px"

          document.getElementById("photo").style.height = "270px";
          document.getElementById("photo").style.width = "270px";
        } else {
          document.getElementById("head").style.height = "500px";
          document.getElementById("head").style.paddingTop = "0";

          document.getElementById("headText").style.height = "600px";
          document.getElementById("title").style.fontSize = "60px"

          document.getElementById("photo").style.height = "270px";
          document.getElementById("photo").style.width = "270px";
        }
      }
    }
  },
  beforeDestroy() {
    document.getElementById("head").style.opacity = "0";
    document.getElementById("head").style.visibility = "hidden";

    document.getElementById("headText").style.opacity = "0";
    document.getElementById("headText").style.visibility = "hidden";
  }
}
</script>

<style scoped lang="scss">

.about {
  mix-blend-mode: difference;
  will-change: opacity;
  padding-top: 50px;
  height: 200vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#topDiv {
  margin-top: 100vh;
}

.infoCont {
  border: 2px solid #fff;
  width: 75%;
  height: auto;
  padding: 15px 10px;
  background: #99999923;
  margin: 15px 0;
  height: 200px;
}

#screener {
  background: #000;
  height: 295px;
  width: 100vw;
  position: fixed;
}
</style>
