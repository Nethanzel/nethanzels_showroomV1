<template>
  <div class="skill">
    <headeR />
      <h1>Nethanzêl's skills.</h1>

      <div class="skillCont topDiv">
        <h2>Technical knowledge of:</h2>

        <div class="iconCont">
          <img src="../assets/skills/vb.png" class="skillIcon">
          <p>Visual Basic .NET</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/mysql.png" class="skillIcon">
          <p>MySQL</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/photoshop.png" class="skillIcon">
          <p>Photoshop</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/hypertext.png" class="skillIcon">
          <p>HTML</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/css.png" class="skillIcon">
          <p>CSS</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/bootstrap.png" class="skillIcon">
          <p>Bootstrap</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/sass.png" class="skillIcon">
          <p>Sass</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/JavaScript.png" class="skillIcon">
          <p>JavaScript</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/node.png" class="skillIcon">
          <p>NodeJS</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/express.png" class="skillIcon">
          <p>ExpressJS</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/ejs.png" class="skillIcon">
          <p>EJS</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/passportjs.png" class="skillIcon">
          <p>PassportJS</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/vue.png" class="skillIcon">
          <p>Vue</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/vuechartjs.png" class="skillIcon">
          <p>Vue-chartJS</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/chartjs.png" class="skillIcon">
          <p>ChartJS</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/socketio.png" class="skillIcon">
          <p>Socket.IO</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/mongodb.png" class="skillIcon">
          <p>MongoDB</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/mongoose.png" class="skillIcon">
          <p>MongooseJS</p>
        </div>

        <div class="iconCont">
          <img src="../assets/skills/git.png" class="skillIcon">
          <p>Git</p>
        </div>

      </div>

      <div class="skillCont lastDiv">

        <h2>Working abilities:</h2>

        <div class="iconCont">
          <img src="../assets/abilities/leader.png" class="skillIcon">
          <p>Leadership</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/team.png" class="skillIcon">
          <p>Team work</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/proactive.png" class="skillIcon">
          <p>Proactivity</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/mentor.png" class="skillIcon">
          <p>Mentor</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/patience.png" class="skillIcon">
          <p>Patience</p>
        </div>
        <div class="iconCont">
          <img src="../assets/abilities/persist.png" class="skillIcon">
          <p>Persistence</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/scientist.png" class="skillIcon">
          <p>Scientist</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/philosophy.png" class="skillIcon">
          <p>Philosophy</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/observant.png" class="skillIcon">
          <p>Observant</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/perfection.png" class="skillIcon">
          <p>Perfectionist</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/bold.png" class="skillIcon">
          <p>Attitude</p>
        </div>

        <div class="iconCont">
          <img src="../assets/abilities/neat.png" class="skillIcon">
          <p>Organized</p>
        </div>

      </div>
  </div>
</template>

<script>
import headeR from '@/components/navegationMenu.vue'

export default {
  name: "Skills",
  title: "Nethanzêl's Showroom", 
  components: {
    headeR
  }

}
</script>

<style scoped lang="scss">

.skill {
  mix-blend-mode: difference;
  will-change: opacity;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.skillCont {
  border: 2px solid #fff;
  width: 75%;
  height: auto;
  padding: 15px 10px;
  background: #99999944;
  margin-bottom: 30px;
}

h1 {
  margin-bottom: 25px;
  cursor: default;
  position: fixed;
  padding-top: 60px;
  text-align: center;
  width: 100%;
  background: #000;
  top: 0;
  letter-spacing: 3px;
}

.skillIcon {
  height: 75px;
  width: 75px;
  margin: 0 20px;
  border-radius: 50%;
  background: #fff;
  object-fit: cover;
  transition: opacity .7s;
}

h2 {
  margin-bottom: 25px;
  cursor: default;
}

.iconCont {
  display: inline-flex;
  margin: 15px 20px;
  max-width: 100px;
  justify-content: center;
  align-items: center;

}

.iconCont p {
  position: absolute;
  opacity: 0;
  cursor: default;
  font-weight: bold;
  font-size: 19px;
  text-overflow: clip;
  transition: opacity 1s;
}

.iconCont:hover p {
  opacity: 1;
  transition: opacity .5s;
}

.iconCont:hover .skillIcon {
  opacity: .3;
  transition: opacity .5s;
}

@media screen and (max-width: 770px) {

  .skill {
    mix-blend-mode: difference;
    will-change: opacity;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .topDiv {
    margin-top: 65px;
  }

  .skillCont {
    border: 2px solid #fff;
    width: 75%;
    height: auto;
    padding: 10px 10px;
    background: #99999944;
    margin-bottom: 30px;
  }

  .lastDiv {
    margin-bottom: 60px;
  }

  h1 {
    margin-bottom: 25px;
    cursor: default;
    position: fixed;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    background: #000;
    top: 0;
    letter-spacing: 3px;
  }

  .skillIcon {
    height: 65px;
    width: 65px;
    margin: 0 15px;
    border-radius: 50%;
    background: #fff;
    object-fit: cover;
    transition: opacity .7s;
  }

  .iconCont {
    display: inline-flex;
    margin: 10px 15px;
    max-width: 100px;
    justify-content: center;
    align-items: center;

  }

  .iconCont p {
    position: absolute;
    opacity: 0;
    cursor: default;
    font-weight: bold;
    font-size: 17px;
    text-overflow: clip;
    transition: opacity 1s;
  }
}

@media screen and (max-width: 670px) {

  .skill {
    mix-blend-mode: difference;
    will-change: opacity;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .topDiv {
    margin-top: 65px;
  }

  .skillCont {
    border: 2px solid #fff;
    width: 75%;
    height: auto;
    padding: 10px 10px;
    background: #99999944;
    margin-bottom: 30px;
  }

  .lastDiv {
    margin-bottom: 60px;
  }

  h1 {
    margin-bottom: 25px;
    cursor: default;
    position: fixed;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    background: #000;
    top: 0;
    letter-spacing: 3px;
  }

  .skillIcon {
    height: 55px;
    width: 55px;
    margin: 0 15px;
    border-radius: 50%;
    background: #fff;
    object-fit: cover;
    transition: opacity .7s;
  }

  .iconCont {
    display: inline-flex;
    margin: 10px 15px;
    max-width: 100px;
    justify-content: center;
    align-items: center;

  }

  .iconCont p {
    position: absolute;
    opacity: 0;
    cursor: default;
    font-weight: bold;
    font-size: 17px;
    text-overflow: clip;
    transition: opacity 1s;
  }
}

@media screen and (max-width: 615px) {

  .skill {
    mix-blend-mode: difference;
    will-change: opacity;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .topDiv {
    margin-top: 65px;
  }

  .skillCont {
    border: 2px solid #fff;
    width: 75%;
    height: auto;
    padding: 10px 10px;
    background: #99999944;
    margin-bottom: 30px;
  }

  .lastDiv {
    margin-bottom: 60px;
  }

  h1 {
    margin-bottom: 25px;
    cursor: default;
    position: fixed;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    background: #000;
    top: 0;
    letter-spacing: 3px;
  }

  .skillIcon {
    height: 50px;
    width: 50px;
    margin: 0 12px;
    border-radius: 50%;
    background: #fff;
    object-fit: cover;
    transition: opacity .7s;
  }

  .iconCont {
    display: inline-flex;
    margin: 7px 12px;
    max-width: 100px;
    justify-content: center;
    align-items: center;

  }

  .iconCont p {
    position: absolute;
    opacity: 0;
    cursor: default;
    font-weight: bold;
    font-size: 15px;
    text-overflow: clip;
    transition: opacity 1s;
  }
}

@media screen and (max-width: 525px) {
  .skill {
    mix-blend-mode: difference;
    will-change: opacity;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .topDiv {
    margin-top: 65px;
  }

  .skillCont {
    border: 2px solid #fff;
    width: 85%;
    height: auto;
    padding: 10px 10px;
    background: #99999944;
    margin-bottom: 30px;
  }

  .lastDiv {
    margin-bottom: 60px;
  }

  h1 {
    margin-bottom: 25px;
    cursor: default;
    position: fixed;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    background: #000;
    top: 0;
    letter-spacing: 3px;
  }

  .skillIcon {
    height: 50px;
    width: 50px;
    margin: 0 7px;
    border-radius: 50%;
    background: #fff;
    object-fit: cover;
    transition: opacity .7s;
  }

  .iconCont {
    display: inline-flex;
    margin: 5px 7px;
    max-width: 100px;
    justify-content: center;
    align-items: center;

  }

  .iconCont p {
    position: absolute;
    opacity: 0;
    cursor: default;
    font-weight: bold;
    font-size: 13px;
    text-overflow: clip;
    transition: opacity 1s;
  }
}

@media screen and (max-width: 380px) {

  .skillCont {
    border: 2px solid #fff;
    width: 90%;
    height: auto;
    padding: 10px 0px;
    background: #99999944;
    margin-bottom: 30px;
  }

  h1 {
    margin-bottom: 25px;
    cursor: default;
    position: fixed;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    background: #000;
    top: 0;
    letter-spacing: 3px;
    font-size: 37px;
  }
}

</style>