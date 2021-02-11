<template>
    <div class="project">
    <headeR />
      <h1>Nethanzêl's projects.</h1>

      <section class="projectCont">
        <img src="../assets/projects/project.png" alt="project logo" class="projectLogo">
        <h2 class="projName">Project's name</h2>
        <p class="projDesc">
          Project's description.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus debitis vel 
          ea est aut animi totam repellat explicabo vero reprehenderit impedit, dicta atque, et perferendis nobis esse, 
          sint facilis.
        </p>

        <div class="projDet">
          <div class="projTech">
            <p>Made using:</p>
            <div class="projTech_cont">

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

            </div>
          </div>

          <div class="projFooter">
            <p>Get this porject on Github</p>
          </div>
        </div>
      </section>

      <section class="projectCont">
        <img src="../assets/projects/project.png" alt="project logo" class="projectLogo">
        <h2 class="projName">Project's name</h2>
        <p class="projDesc">
          Project's description.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus debitis vel 
          ea est aut animi totam repellat explicabo vero reprehenderit impedit, dicta atque, et perferendis nobis 
          esse, sint facilis.
        </p>

        <div class="projDet">
          <div class="projTech">
            <p>Made using:</p>
            <div class="projTech_cont">

              <div class="iconCont">
                <img src="../assets/skills/bootstrap.png" class="skillIcon">
                <p>Sass</p>
              </div>

              <div class="iconCont">
                <img src="../assets/skills/mysql.png" class="skillIcon">
                <p>JavaScript</p>
              </div>

              <div class="iconCont">
                <img src="../assets/skills/vb.png" class="skillIcon">
                <p>NodeJS</p>
              </div>

            </div>
          </div>

          <div class="projFooter">
            <p>Get this porject on Github </p>
          </div>
        </div>
      </section>

      <section class="projectCont">
        <img src="../assets/projects/project.png" alt="project logo" class="projectLogo">
        <h2 class="projName">Project's name</h2>
        <p class="projDesc">
          Project's description.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus debitis vel 
          ea est aut animi totam repellat explicabo vero reprehenderit impedit, dicta atque, et perferendis nobis 
          esse, sint facilis.
        </p>

        <div class="projDet">
          <div class="projTech">
            <p>Made using:</p>
            <div class="projTech_cont">

              <div class="iconCont">
                <img src="../assets/skills/css.png" class="skillIcon">
                <p>Sass</p>
              </div>

              <div class="iconCont">
                <img src="../assets/skills/ejs.png" class="skillIcon">
                <p>JavaScript</p>
              </div>

              <div class="iconCont">
                <img src="../assets/skills/socketio.png" class="skillIcon">
                <p>NodeJS</p>
              </div>

            </div>
          </div>

          <div class="projFooter">
            <p>Get this porject on Github </p>
          </div>
        </div>
      </section>

    </div>
</template>

<script>
import headeR from '@/components/navegationMenu.vue'

export default {
  name: "Projects",
  title: "Nethanzêl's Showroom", 
  components: {
    headeR
  }
}
</script>

<style scoped lang="scss">

.project {
  mix-blend-mode: difference;
  will-change: opacity;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
}

.projectCont {
  border: 2px solid #fff;
  width: 75%;
  height: auto;
  padding: 15px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #99999944;
  margin: 20px 0;
}

h1 {
  margin-bottom: 25px;
  letter-spacing: 3px;
  position: fixed;
  padding-top: 60px;
  text-align: center;
  width: 100%;
  background: #000;
  top: 0;
  z-index: 10;
}

.projectLogo {
  height: 200px;
  width: 200px;
  border: 2px solid #fff;
  border-radius: 50%;
  object-fit: cover;
  isolation: isolate;
  background: #fff;
  z-index: 0;
}

.projFooter {
  border-top: 1px solid #fff;
  margin-top: 30px;
  padding: 5px 15px;
  width: 100%;

}

.projName {
  margin: 5px 0 10px 0; 
  font-size: 30px;
}

.projDesc {
  text-align: justify;
  margin: 0 10px 0 10px;
}

.projTech {
  border-top: 1px solid #fff;
  margin-top: 30px;
  padding: 5px 15px;
  min-width: 215px;
  width: 100%;
}

.projTech_cont {
  padding-top: 5px;
}

.projDet {
  width: auto;
}

.skillIcon {
  height: 60px;
  width: 60px;
  margin: 0 10px;
  border-radius: 50%;
  background: #fff;
  object-fit: cover;
  transition: opacity .7s;
}

.iconCont {
  display: inline-flex;
  margin: 10px 10px;
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

.iconCont:hover p {
  opacity: 1;
  transition: opacity .5s;
}

.iconCont:hover .skillIcon {
  opacity: .3;
  transition: opacity .5s;
}
</style>